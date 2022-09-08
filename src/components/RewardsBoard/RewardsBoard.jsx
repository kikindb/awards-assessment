import React from "react";
import styles from "./RewardsBoard.module.css";

export default function RewardsBoard({ points = 0 }) {
  return (
    <section className={styles.RewardsContainer}>
      <h2>TOTAL POINTS</h2>
      <h3 className={styles.PointsText}>{points}</h3>
    </section>
  );
}
