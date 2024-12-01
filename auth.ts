import NextAuth from "next-auth";
import discord from "next-auth/providers/discord";
import GitHub from "next-auth/providers/github";
import google from "next-auth/providers/google";
import { AuthAdapter } from "@/database/services/auth.service";

export const { handlers, auth } = NextAuth({
    providers: [discord, GitHub, google],
    adapter: AuthAdapter()
});
