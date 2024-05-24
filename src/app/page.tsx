import RequestTester from "./RequestTester";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <RequestTester />
    </main>
  );
}
