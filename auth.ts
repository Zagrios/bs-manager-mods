import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import google from "next-auth/providers/google"
 
export const { handlers, auth } = NextAuth({
  providers: [GitHub,google],
})