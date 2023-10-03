import { DescopeAuthenticator } from "./DescopeAuthenticator";
import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/session.server";
import { db as prisma } from "./db.server";

export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new DescopeAuthenticator(
    {
      domain: "api.descope.com",
      clientID: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
      callbackURL:
        process.env.AUTH_CALLBACK_URL || "http://localhost:3000/auth/callback",
      scope: "openid profile email",
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
      const email = profile.emails?.[0]?.value;

      if (!email) {
        throw new Error("Email not found in profile");
      }

      if (!profile.displayName) {
        throw new Error("No profile name");
      }

      // Get the user data from your DB or API using the tokens and profile
      return prisma.user.upsert({
        where: {
          email,
        },
        create: {
          email,
          name: profile.displayName,
        },
        update: {},
      });
    }
  ),
  "descope"
);

export async function validateCredentials() {}
