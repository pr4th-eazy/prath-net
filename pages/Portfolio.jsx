import Image from "next/image";
import React from "react";
import styles from "/styles/Portfolio.module.css";

const Github = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <div className={styles.item}>
          <h2>Hi my name is Prathamesh Asolkar</h2>
          <h4>I am a creative UI/Ux Designer from India.</h4>
          <p>
            PR4TH CREATES WEB DESIGNS AND MULTIPAGE WEBSITES AND HE IS BASED IN MUMBAI, MAHARASHTRA 
            WHICH IS LOCATED IN INDIA. PR4TH HELPS BUILD MEANING FULL BRANDS USING DESIGN.
          </p>
          
         <a href='https://github.com/pr4th-eazy'><button>View my Github</button></a> 
        </div>
        <div className={styles.item}>
          <Image src='/img/port.png' alt="" height={500} width={600} />
        </div>
      </div>
    </div>
  );
};

export default Github;
