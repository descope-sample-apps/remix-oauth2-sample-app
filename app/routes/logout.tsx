import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/auth.server";
export let loader: LoaderFunction = async ({ request }) => {

   let baseURL = "api.descope.com"
   if (process.env.DESCOPE_PROJECT_ID.length >= 32) {
      const localURL = process.env.DESCOPE_PROJECT_ID.substring(1, 5)
      baseURL = [baseURL.slice(0, 4), localURL, ".", baseURL.slice(4)].join('') 
   }
   await fetch(`https://${baseURL}/oauth2/v1/logout`);

   await authenticator.logout(request, { redirectTo: "/" });
  };