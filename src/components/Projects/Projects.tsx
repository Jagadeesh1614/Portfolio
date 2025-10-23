import React from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "ResolveNow – Online Complaints Platform",
    desc: "Complaint registration and resolution system with separate user/admin panels built using MERN stack.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Web-Based Farm Management System",
    desc: "Assists farmers in animal husbandry management; data handled by veterinary doctors.",
    tech: ["React", "Node.js", "MySQL"],
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="container">
      <h2>Projects</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <article key={p.title} className={styles.card}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className={styles.tech}>
              {p.tech.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
