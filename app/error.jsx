"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error("Application error:", error);
  }, [error]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "4rem", marginBottom: "1rem" }}>Oops!</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Something went wrong
      </h2>
      <p style={{ marginBottom: "2rem", maxWidth: "500px" }}>
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <button
          onClick={() => reset()}
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Try again
        </button>
        <Link
          href="/"
          style={{
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            backgroundColor: "transparent",
            color: "white",
            border: "2px solid white",
            textDecoration: "none",
            borderRadius: "4px",
            display: "inline-block",
          }}
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
