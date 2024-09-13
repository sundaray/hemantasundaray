import { DefaultSession, DefaultUser } from "next-auth";
import { Profile as DefaultProfile } from "next-auth";
import { DefaultJWT,JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User extends DefaultUser {
    role: string;
    sub: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }

  interface Profile extends DefaultProfile {
    given_name: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: string;
  }
}