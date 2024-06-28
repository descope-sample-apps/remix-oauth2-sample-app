import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/auth.server";
import { DescopeAuthenticator } from "~/DescopeAuthenticator";
export let loader: LoaderFunction = async ({ request }) => {

   await fetch(`https://${DescopeAuthenticator.baseURL}/oauth2/v1/logout`);

   await authenticator.logout(request, { redirectTo: "/" });
  };