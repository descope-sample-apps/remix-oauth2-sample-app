import { Authenticator } from "remix-auth";
import { DescopeAuthenticator } from "./DescopeAuthenticator.js";
import { sessionStorage } from "~/session.server";

export let authenticator = new Authenticator(sessionStorage);

authenticator.use(
  new DescopeAuthenticator(
    {
      domain: `api.descope.com`,
      clientID: "P2ShseKVGkaSg8x0lFizBkFuVbju",
      clientSecret:
        "K2WDcEFrPcPo1TFndBlO6CgC0AC6qIBoXoMd3PxfBKthX8ftESJBDtGDLXbfGu42Wv6U8RA",
      callbackURL: "http://localhost:3000/auth/callback",
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
