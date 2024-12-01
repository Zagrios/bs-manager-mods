import db from '@/database'
import {users, accounts, sessions} from "@/database/schemas/auth.schema"
import type {Adapter, AdapterAccount, AdapterSession, AdapterUser} from "@auth/core/adapters";
import {and, eq, lte} from "drizzle-orm";
import {Awaitable} from "@auth/core/types";
import crypto from "node:crypto";

const hashEmail = function (value: string): string {
    return crypto.createHash("sha256").update(value).digest('hex')
}

export interface User extends AdapterUser {
    name: string
}

export async function createUser(data: User) {
    const {id, ...insertData} = data

    // hash email, a not needed information in plain text
    insertData.email = hashEmail(data.email)

    return db
        .insert(users)
        .values(insertData)
        .returning()
        .then((res) => res[0]) as Awaitable<User>
}

export async function getUser(userId: string) {

    return db
        .select()
        .from(users)
        .where(eq(users.id, userId))
        .then((res) =>
            res.length > 0 ? res[0] : null
        ) as Awaitable<User | null>
}

export async function getUserByEmail(email: string) {
    return db
        .select()
        .from(users)
        .where(eq(users.email, hashEmail(email)))
        .then((res) =>
            res.length > 0 ? res[0] : null
        ) as Awaitable<User | null>
}

export async function createSession(data: {
    sessionToken: string
    userId: string
    expires: Date
}) {
    return db
        .insert(sessions)
        .values(data)
        .returning()
        .then((res) => res[0])
}

export async function getSessionAndUser(sessionToken: string) {
    return db
        .select({
            session: sessions,
            user: users,
        })
        .from(sessions)
        .where(eq(sessions.sessionToken, sessionToken))
        .innerJoin(users, eq(users.id, sessions.userId))
        .then((res) => (res.length > 0 ? res[0] : null)) as Awaitable<{
        session: AdapterSession
        user: AdapterUser
    } | null>
}

export async function updateUser(data: Partial<User> & Pick<User, "id">) {
    if (!data.id) {
        throw new Error("No user id.")
    }

    if (data.email) {
        data.email = hashEmail(data.email)
    }

    const [result] = await db
        .update(users)
        .set(data)
        .where(eq(users.id, data.id))
        .returning()

    if (!result) {
        throw new Error("No user found.")
    }

    return result as Awaitable<User>
}

export async function updateSession(
    data: Partial<AdapterSession> & Pick<AdapterSession, "sessionToken">
) {
    return db
        .update(sessions)
        .set(data)
        .where(eq(sessions.sessionToken, data.sessionToken))
        .returning()
        .then((res) => res[0])
}

export async function linkAccount(data: AdapterAccount) {
    await db.insert(accounts).values(data)
}

export async function getUserByAccount(
    account: Pick<AdapterAccount, "provider" | "providerAccountId">
) {
    const result = await db
        .select({
            account: accounts,
            user: users,
        })
        .from(accounts)
        .innerJoin(users, eq(accounts.userId, users.id))
        .where(
            and(
                eq(accounts.provider, account.provider),
                eq(accounts.providerAccountId, account.providerAccountId)
            )
        )
        .then((res) => res[0])

    const user = result?.user ?? null
    return user as Awaitable<User | null>
}

export async function deleteSession(sessionToken: string) {
    await db
        .delete(sessions)
        .where(eq(sessions.sessionToken, sessionToken))
}

export async function deleteUser(id: string) {
    await db.delete(users).where(eq(users.id, id))
}

export async function unlinkAccount(
    params: Pick<AdapterAccount, "provider" | "providerAccountId">
) {
    await db
        .delete(accounts)
        .where(
            and(
                eq(accounts.provider, params.provider),
                eq(accounts.providerAccountId, params.providerAccountId)
            )
        )
}

export async function getAccount(providerAccountId: string, provider: string) {
    return db
        .select()
        .from(accounts)
        .where(
            and(
                eq(accounts.provider, provider),
                eq(accounts.providerAccountId, providerAccountId)
            )
        )
        .then((res) => res[0] ?? null) as Promise<AdapterAccount | null>
}

export async function clearExpiredSessions(){
    await db.delete(sessions).where(lte(sessions.expires, new Date()))
}

// If more customization is needed just rewrite the function here
export function AuthAdapter(): Adapter {
    return {
        createUser, getUser, getUserByAccount, getUserByEmail, linkAccount, createSession, getSessionAndUser,
        updateSession, updateUser, deleteSession, deleteUser, unlinkAccount, getAccount
    }
}
