import React from "react";

import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description, skills, demo, source, site },
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.sources}>
        {demo != null &&
          <a href={demo} className={styles.source}>
            Demo
          </a>
        }
        {site != null &&
          <a href={site} className={styles.source}>
            Site
          </a>
        }
        <a href={source} target="_blank" rel="noopener noreferrer" className={styles.source}>
          Source
        </a>
      </div>
    </div>
  );
};