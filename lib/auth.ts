import { FirestoreAdapter } from "@auth/firebase-adapter"
import { NextAuthOptions } from "next-auth"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"

import { createUser } from "@/lib/create-user"
import { getUserRole } from "@/lib/get-user-role"
import { sendEmailLoginLink } from "@/lib/send-email-login-link"

export const authOptions: NextAuthOptions = {
  // @ts-ignore
  adapter: FirestoreAdapter(),
  providers: [
    EmailProvider({
      type: "email",
      async sendVerificationRequest({ identifier: email, url }) {
        await sendEmailLoginLink(email, url)
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ account, profile, email }) {
      let userEmail
      let role

      // Determine the email based on the provider
      if (account!.provider === "google") {
        // Google provider
        userEmail = profile?.email // Email from Google profile
      } else if (account!.provider === "email" && !email?.verificationRequest) {
        // Email provider, and it's the actual sign-in (not the verification request)
        userEmail = account?.providerAccountId // Extract the email address
      }

      // Determine the role based on the userEmail
      if (userEmail) {
        role =
          userEmail === "rawgrittt@gmail.com" ||
          userEmail === "pgcim14.hemant@spjimr.org"
            ? "admin"
            : "user"

        // Create a user document in Firestore
        await createUser(userEmail, role)
      }

      return true
    },

    async jwt({ token, profile, user }) {
      if (user) {
        token.role = user.role
      }
      if (profile) {
        const { email } = profile
        const role = await getUserRole(email!)
        token.role = role
      }
      return token
    },
    async session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
}
