import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: "center", padding: "2rem", color: "#999" }}>
      <p>© {new Date().getFullYear()} Divvela Jagadeesh. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
