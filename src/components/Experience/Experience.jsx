import React from "react";

import styles from "./Experience.module.css";
import data from "../../data/info.json"

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <ul className={styles.history}>
        {data.experience.map((historyItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.company}`}</h3>
                <p>
                  {historyItem.endDate
                    ? `${historyItem.startDate} - ${historyItem.endDate}`
                    : historyItem.startDate}
                </p>
                <ul>
                  {historyItem.experiences.map((experience, id) => {
                    return <li key={id}>{experience}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>);
};
