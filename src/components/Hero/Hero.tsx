import React from "react";
import styles from "./Hero.module.css";
import profile from "/src/assets/profile.jpg"; // ✅ path correct if file exists

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.text}>
            <h1>
              Hi, I’m <span className={styles.name}>Divvela Jagadeesh</span>
            </h1>
            <p className={styles.lead}>
              Full-Stack Developer | MERN | Problem Solver | Tech Enthusiast
            </p>
            <div className={styles.ctas}>
              <a
                className={styles.btn}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <a className={styles.ghost} href="/projects">
                View Projects
              </a>
            </div>
          </div>

          <div className={styles.imageBox}>
            <img src={profile} alt="Divvela Jagadeesh" className={styles.profile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
