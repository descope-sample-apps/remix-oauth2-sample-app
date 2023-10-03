import type { LoaderFunction } from "@remix-run/node";
import { sessionStorage } from "~/session.server";
import { authenticator } from "~/utils/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  await authenticator.authenticate("descope", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });
};

export default function AuthCallback() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Callback</h1>
    </div>
  );
}
