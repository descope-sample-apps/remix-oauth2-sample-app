import type { LoaderFunction } from "@remix-run/node"
import { authenticator } from "~/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.authenticate("DescopeAuthenticator", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/error",
  },
  );
};
