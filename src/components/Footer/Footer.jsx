import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <p>
        2022 Developed by J Enrique Dick B -{" "}
        <a href="https://kikin.dev/github" target="_blank" rel="noreferrer">
          @kikindb
        </a>
      </p>
    </footer>
  );
}
