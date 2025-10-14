import React from "react";

import styles from "./Contact.module.css";
import data from "../../data/info.json"

const contactData = data["contact"]

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href={`mailto:${contactData.email}`}> vegard.gonsholt@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href={contactData.linkedIn} target="_blank" rel="noopener noreferrer">
            <img src="/linkedin.png" alt="LinkedIn" className={styles.icon} />
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <a href={contactData.github} target="_blank" rel="noopener noreferrer">
            <img src="/github.png" alt="GitHub" className={styles.icon} />
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};
