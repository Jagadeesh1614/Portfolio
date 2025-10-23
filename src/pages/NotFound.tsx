import React from "react";

const NotFound: React.FC = () => (
  <main style={{ textAlign: "center", padding: "4rem" }}>
    <h1>404 - Page Not Found</h1>
    <p>The page you’re looking for doesn’t exist.</p>
    <a href="/" style={{ color: "#2dd4bf", textDecoration: "underline" }}>
      Go back home
    </a>
  </main>
);

export default NotFound;
