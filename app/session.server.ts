import {
    createCookie,
    createFileSessionStorage,
} from "@remix-run/node";

// In this example the Cookie is created separately.
const sessionCookie = createCookie("__session", {
    secrets: ["r3m1xr0ck5"],
    sameSite: "lax",
    httpOnly: true,
    // maxAge: 60,
});

export const sessionStorage =
    createFileSessionStorage({
        // The root directory where you want to store the files.
        // Make sure it's writable!
        dir: "sessions",
        cookie: sessionCookie,
    });

export let { getSession, commitSession, destroySession } = sessionStorage;