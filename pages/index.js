//* This is the main file where we would render our files!

import Head from "next/head";
import Link from "next/link";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1>
            <code className={styles.title}>
              Simple Next.js demo! See <Link href="/cars">Cars</Link>{" "}
            </code>
          </h1>
        </main>
      </div>
    </>
  );
}
