import React from "react";
import styles from "/styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Link href="/">
          <span style={{ 'background-color': 'rgba(255, 0, 242, 0.774)', 'width': 'max-content'}}>PR4TH.</span>
        </Link>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/Portfolio">PORTFOLIO</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/Social">SOCIAL</Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/Contact">CONTACT</Link>
          </li>
          <li className={styles.listEmail}>
            <button>
            <a href="https://github.com/pr4th-eazy">GITHUB</a>
            </button>
          </li>
        </ul>
      </div>
      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className={styles.menu}
        style={{ right: open ? "0px" : "-50vw" }}
      >
        
        <li className={styles.menuItem}>
          <Link href="/Portfolio">PORTFOLIO</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/Social">SOCIAL</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/Contact">CONTACT</Link>
        </li>
        <li className={styles.listEmail}>
            <button>
            <a href="https://github.com/pr4th-eazy">GITHUB</a>
            </button>
          </li>
      </ul>
      {/* <div className={styles.item}>
        <Image />
        <span>@prathameshasolkar17</span>
      </div> */}
    </div>
  );
};

export default Navbar;
