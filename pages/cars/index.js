import Link from "next/link";
import Head from "next/head";

import styles from "../../styles/Home.module.css";

export default function CarsList() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cars list</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Cars list</h1>

        <ul className={styles.links}>
          <li>
            <Link href="/cars/tesla">Tesla</Link>
          </li>
          <li>
            <Link href="/cars/ford">Ford</Link>
          </li>
          <li>
            <Link href="/cars/lambo">Lambo</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
