import {
    timestamp,
    text,
    primaryKey,
    pgSchema
} from "drizzle-orm/pg-core"
import type {AdapterAccountType} from "next-auth/adapters"

export const authSchema = pgSchema('auth')

export const users = authSchema.table("users", {
    id: text("id")
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique()
})

export const accounts = authSchema.table(
    "accounts",
    {
        userId: text("user_id")
            .notNull()
            .references(() => users.id, {onDelete: "cascade"}),
        type: text("type").$type<AdapterAccountType>().notNull(),
        provider: text("provider").notNull(),
        providerAccountId: text("provider_account_id").notNull()
    },
    (account) => ({
        compoundKey: primaryKey({
            columns: [account.provider, account.providerAccountId],
        }),
    })
)

export const sessions = authSchema.table("sessions", {
    sessionToken: text("session_token").primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => users.id, {onDelete: "cascade"}),
    expires: timestamp("expires", {mode: "date"}).notNull(),
})
