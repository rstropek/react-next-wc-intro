import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Next Introduction</h1>

      <Link href="/tic-tac-toe">Tic Tac Toe</Link><br/>
      <Link href="/form">Form</Link>
    </div>
  );
}
