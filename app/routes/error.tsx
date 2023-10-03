import { Link } from "@remix-run/react";
import type { CSSProperties } from "react";

export default function Index() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Login error</h1>
      <h3 style={styles.subHeader}>
        You are not logged in. Please click the link below to try again.
      </h3>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <Link to="/login" style={styles.loginLink}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

const styles: { [key: string]: CSSProperties } = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "30px",
    backgroundColor: "#fff7f7",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    color: "#d43f00",
    marginBottom: "20px",
    fontWeight: 600,
  },
  subHeader: {
    textAlign: "center",
    color: "#555",
    marginBottom: "25px",
    fontWeight: 500,
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
};
