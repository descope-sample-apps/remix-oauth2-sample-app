import { Link } from "@remix-run/react";
import type { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontWeight: 600,
  },
  list: {
    listStyleType: "none",
    padding: "0",
    textAlign: "center",
  },
  listItem: {
    margin: "10px 0",
  },
  loginLink: {
    padding: "10px 20px",
    textDecoration: "none",
    backgroundColor: "#007BFF",
    color: "#FFF",
    borderRadius: "4px",
    transition: "background-color 0.3s",
  },
  externalLink: {
    textDecoration: "none",
    color: "#007BFF",
    fontWeight: 400,
    transition: "color 0.3s",
  },
  loginButtonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Index() {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.header}>Welcome to the Descope + Remix Sample App</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a
              style={styles.externalLink}
              target="_blank"
              href="https://remix.run/docs"
              rel="noreferrer"
            >
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
      <div style={styles.loginButtonContainer}>
        <Link to="login" style={styles.loginLink}>
          Login
        </Link>
      </div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
          body {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>
    </>
  );
}
