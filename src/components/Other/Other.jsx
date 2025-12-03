import React from "react";

import styles from "./Other.module.css";
import data from "../../data/info.json"

export const Other = () => {
  return (
    <section className={styles.container} id="other">
      <h2 className={styles.title}>Extracurricular Activity</h2>
      <ul className={styles.history}>
        {data.other.map((historyItem, id) => {
          return (
            <li key={id} className={styles.historyItem}>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>
                  {historyItem.endDate
                    ? `${historyItem.startDate} - ${historyItem.endDate}`
                    : historyItem.startDate}
                </p>
                <ul>
                  {historyItem.description.map((other, id) => {
                    return <li key={id}>{other}</li>;
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>);
};
