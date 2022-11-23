// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions } from "next-auth";
import { NextApiHandler } from 'next';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// import { Session } from "../../../lib/auth/session";
// import { Session } from "../../../utils/session";

import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    // session: {
    //   strategy: "jwt",
    // },
    pages: {
      signIn: "/auth/SignIn",
      signOut: "api//auth/signOut",
      // error: "/auth/error", // Error code passed in query string as ?error=
    },
  providers: [

    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string,
        clientSecret: process.env.GOOGLE_SECRET as string,
      }),
      
      
  ],

  secret: process.env.SECRET,


  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
        return baseUrl
      },
      async session({ session, user, token }) {
        return session
      },
      async jwt({ token, user, account, profile, isNewUser }) {
        return token
      }
  },
};

export default NextAuth(authOptions);

