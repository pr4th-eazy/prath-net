import React from "react";
import styles from "/styles/About.module.css";
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>
        <div className={styles.items}>
        <div className={styles.item}>
        <Image src='/img/education-0.png' height={185} width={220} alt=''/>
        <h1>EDUCATION</h1>
        <p>I have completed my school. Currently I am studying BCOM in my Degree College</p>
     </div>
     <div className={styles.item}>
        <Image src='/img/console-new.png' height={180} width={180} alt=''/>
        <h1>HOBBIES</h1>
        <p>Gaming is one of my hobbies / passion. I have been playing videogames on a good level since 2011 and counting.</p>
     </div>
     <div className={styles.item}>
        <Image src='/img/avatarVector.png' height={250} width={230} alt=''/>
        <h1>PERSONAL INFO</h1>
        <p>My real name is Prathamesh Asolkar and I live in Mumbai, Maharashtra which is located in my country India. </p>
     </div>
        </div>
    </div>
  );
};

export default About;
