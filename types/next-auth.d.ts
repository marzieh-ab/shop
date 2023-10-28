import { NextAuth } from "next-auth";
// // import NextAuth from "next-auth/next";
// import NextAuth from "next-auth/next";
declare module "next-auth" {
  interface User {
    id: string;
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
