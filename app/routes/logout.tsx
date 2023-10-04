import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/auth.server";
export let loader: LoaderFunction = async ({ request }) => {

   await fetch(`https://api.descope.com/oauth2/v1/logout`);

   await authenticator.logout(request, { redirectTo: "/" });
  };