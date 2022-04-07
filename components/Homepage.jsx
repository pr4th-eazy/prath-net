import Image from "next/image";
import styles from "/styles/Homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
      <h1>Hi, I am PR4TH!</h1>
      <p>Hello everyone , I am Prathamesh Asolkar 
        <br />also known as PR4TH. This is my personal
        <br />  website. Make sure you also visit my
        <br /> social media to know more about me!
      </p>
      <span className={styles.down}>&darr; Scroll down to know more about me! &darr;</span>
      </div>
      <div className={styles.right}>
      <Image src='/img/avocado.png' alt="" height={500} width={500}/>
      </div>
    </div>
  );
};

export default Homepage;
