import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./Home";
import Overlay from "@/components/Overlay";

export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
      <Overlay />
    </main>
  );
}
