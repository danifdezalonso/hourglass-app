import React from "react";
import styles from "./Footer.module.scss"; // CSS especific del component
import "./App.module.scss"; // Reset i CSS general

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__description}> Footer description </div>{" "}
          <div className={styles.footer__llistes}>
            <ul className={styles.footer__llistes__links}>
              <li> Logo </li> <li> Copyright© </li>{" "}
            </ul>{" "}
            <ul className={styles.footer__llistes__links}>
              <li> List title </li>
              <li> List </li> <li> List </li> <li> List </li> <li> List </li>{" "}
              <li> List </li>{" "}
            </ul>{" "}
            <ul className={styles.footer__llistes__links}>
              <li> List title </li> <li> List </li> <li> List </li>{" "}
              <li> List </li> <li> List </li> <li> List </li>{" "}
            </ul>{" "}
            <ul className={styles.footer__llistes__links}>
              <li> List title </li> <li> List </li> <li> List </li>{" "}
              <li> List </li> <li> List </li> <li> List </li>{" "}
            </ul>{" "}
            <ul className={styles.footer__llistes__links}>
              <li> List title </li> <li> List </li> <li> List </li>{" "}
              <li> List </li> <li> List </li> <li> List </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Footer;
