import React from "react";

import Link from "next/link";
import styles from "@/styles/Home.module.css";

export const Header = () => {
  return (
    <div className={styles.header_container}>
      <h1>
        <code className={styles.title}>
          <Link href="/">Home</Link>
        </code>
      </h1>
    </div>
  );
};
