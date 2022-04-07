import Image from "next/image";
import React from "react";
import styles from "/styles/Frames.module.css";

const Frames = () => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>FRAMEWORKS I WORK ON:-</span>
      <div className={styles.items}>
        <div className={styles.card}>
          <Image src="/img/html.png" alt="" height={100} width={100} />
        </div>
        <div className={styles.card}>
          <Image src="/img/csss.png" alt="" height={100} width={100} />
        </div>
        <div className={styles.card}>
          <Image src="/img/jss.png" alt="" height={100} width={100} />
        </div>
        <div className={styles.card}>
          <Image src="/img/react.png" alt="" height={100} width={100} />
        </div>
        <div className={styles.card}>
          <Image src="/img/nextt.png" alt="" height={100} width={100} />
        </div>
      </div>
    </div>
  );
};

export default Frames;
