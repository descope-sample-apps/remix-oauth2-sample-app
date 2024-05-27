import type { LoaderFunction } from "@remix-run/node";
import { authenticator, descopeDomain } from "~/auth.server";
export let loader: LoaderFunction = async ({ request }) => {


   await fetch(`https://${descopeDomain}/oauth2/v1/logout`);

   await authenticator.logout(request, { redirectTo: "/" });
  };