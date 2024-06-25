import { Authenticator } from "remix-auth";
import { DescopeAuthenticator } from "./DescopeAuthenticator.js";
import { sessionStorage } from "~/session.server";

export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new DescopeAuthenticator(
    {
      domain: DescopeAuthenticator.baseURL,
      clientID: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
      callbackURL: process.env.AUTH_CALLBACK_URL || "http://localhost:3000/auth/callback",
      scope: "openid profile email",
    },
    async ({ accessToken, refreshToken, extraParams, profile, context }) => {
      console.log("Verified by descope!");
      // console.log(`ACCESS TOKEN: ${accessToken}`);
      // console.log(`REFRESH TOKEN: ${refreshToken}`)
      // return await getUser(
      //     accessToken,
      //     refreshToken,
      //     extraParams,
      //     profile,
      //     context
      // );
    }
  ),
  "DescopeAuthenticator"
);

export async function validateCredentials() {}
