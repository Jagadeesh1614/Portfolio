import React from "react";

const Resume: React.FC = () => {
  return (
    <section className="container" style={{ padding: "3rem 0", textAlign: "center" }}>
      <h2>My Resume</h2>
      <p>Click below to view or download my resume:</p>

      <div style={{ margin: "2rem 0" }}>
        <iframe
          src="/resume.pdf"
          width="100%"
          height="600px"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
          }}
          title="Divvela Jagadeesh Resume"
        ></iframe>
      </div>

      <a
        href="/resume.pdf"
        download
        style={{
          color: "var(--accent)",
          fontWeight: 600,
          textDecoration: "underline",
        }}
      >
        Download Resume (PDF)
      </a>
    </section>
  );
};

export default Resume;
