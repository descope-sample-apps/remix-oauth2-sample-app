import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  // If the user is already authenticated redirect to /dashboard directly
  return await authenticator.authenticate("descope", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/error",
  });
};
