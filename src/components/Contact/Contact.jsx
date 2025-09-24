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
          <a href={`mailto:${contactData.email}`}> {contactData.email}</a>
        </li>
        <li className={styles.link}>
          <a href={contactData.linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <a href={contactData.github}>{contactData.github}</a>
        </li>
      </ul>
    </footer>
  );
};
