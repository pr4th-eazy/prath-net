import React from "react";
import styles from "/styles/Social.module.css";
import Image from "next/image";

const Social = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.itemA}>
          <Image src="/img/homepage.png" alt="" height={700} width={900} />
        </div>
        <div className={styles.itemB}>
          <div className={styles.item}>
            <h3 style={{color: 'lightblue'}}>Twitter</h3>
            <span><a href="https://twitter.com/pr4th4meshh">Click here to visit.  </a></span>
          </div>
          <div className={styles.item}>
            <h3 style={{color: 'pink'}}>Instagram</h3>
           <span><a href="https://twitter.com/pr4th4meshh">Click here to visit.  </a></span> 
          </div>
          <div className={styles.item}>
            <h3 style={{color: 'lightgreen'}}>Facebook</h3>
            <span><a href="https://twitter.com/pr4th4meshh">Click here to visit.  </a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
