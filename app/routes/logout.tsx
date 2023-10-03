import type { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await fetch(`${process.env.AUTH_URL}/logout`);

  await authenticator.logout(request, { redirectTo: "/" });
};
