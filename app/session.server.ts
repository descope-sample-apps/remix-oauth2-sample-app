import { createCookie, createFileSessionStorage } from "@remix-run/node";

const sessionCookie = createCookie("__session", {
  secrets: ["r3m1xr0ck5"],
  sameSite: "lax",
  httpOnly: true,
});

export const sessionStorage = createFileSessionStorage({
  dir: "sessions",
  cookie: sessionCookie,
});

export const { getSession, commitSession, destroySession } = sessionStorage;
