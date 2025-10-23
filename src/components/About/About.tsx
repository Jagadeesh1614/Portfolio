import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <section id="about" className={`${styles.about} container`}>
      <h2>About Me</h2>

      <div className={styles.grid}>
        {/* Left: Summary */}
        <div className={styles.summary}>
          <p>
            I’m <strong>Divvela Jagadeesh</strong>, a dedicated and detail-oriented
            <strong> Full-Stack Developer </strong> with a B.Tech in Information Technology.
            I enjoy designing and developing modern web applications using the
            <strong> MERN stack </strong> and have practical exposure to AI and IoT through
            academic workshops and projects.
          </p>
          <p>
            My passion lies in building efficient, user-friendly applications and continuously
            learning new technologies to improve my problem-solving skills.
          </p>
        </div>

        {/* Right: Education + Skills */}
        <div className={styles.details}>
          <div className={styles.section}>
            <h3>Education</h3>
            <ul>
              <li>
                <strong>B.Tech (Information Technology)</strong><br />
                Gudlavalleru Engineering College — 2022 - 2026
              </li>
              <li>
                <strong>Intermediate (MPC)</strong><br />
                Narayana Junior College — 2020 - 2022
              </li>
              <li>
                <strong>SSC</strong><br />
                SGVSG Muncipal High School 2019-2020
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Technical Skills</h3>
            <ul className={styles.skills}>
              <li>HTML & CSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React JS</li>
              <li>Node JS & Express JS</li>
              <li>MongoDB</li>
              <li>Bootstrap</li>
              <li>Python (Basics)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
