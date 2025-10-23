import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.brand}>Divvela Jagadeesh</div>
          <div className={styles.links}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/certifications">Certifications</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
