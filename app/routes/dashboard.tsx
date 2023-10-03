import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";
import type { CSSProperties } from "react";

export const loader: LoaderFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return user;
};

export default function Dashboard() {
  const user = useLoaderData();

  return (
    <div style={styles.dashboardContainer}>
      <h1 style={styles.title}>User Dashboard</h1>
      <h2 style={styles.subtitle}>Logged in as {user?.email}</h2>
      <p style={styles.infoText}>The authentication process was successful.</p>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  dashboardContainer: {
    fontFamily: "'Poppins', sans-serif", // Using Poppins font from previous example
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#f7f9fc",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "15px",
    fontWeight: 600,
    fontSize: "24px",
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "25px",
    fontWeight: 500,
    fontSize: "20px",
  },
  infoText: {
    textAlign: "center",
    color: "#666",
    fontSize: "16px",
  },
};
