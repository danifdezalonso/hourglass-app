import React from "react";
import styles from "./Footer.module.scss"; // CSS especific del componentCSS general
import logo from "../images/Logo/Logo.svg";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footer__llistes}>
            <ul className={styles.footer__llistes__links}>
              <li>
                {" "}
                <img src={logo} alt="Logo"></img>{" "}
              </li>{" "}
              <li className={styles.footer__llistes__links__titlemax}>
                Copyright © 2021 WallaServices
              </li>
            </ul>
            <ul className={styles.footer__llistes__links}>
              <li>
                <b> WallaServices</b>
              </li>
              <li> Qui som? </li> <li> Premsa </li> <li> Feina </li>
              <li> Equip </li>
            </ul>
            <ul className={styles.footer__llistes__links}>
              <li>
                <b> Suport </b>
              </li>
              <li> Preguntes Freqüents </li> <li> Normes de publicació </li>
              <li> Consells de seguretat </li>
            </ul>
            <ul className={styles.footer__llistes__links}>
              <li>
                <b> Legal </b>
              </li>
              <li> Condicions d'ús </li> <li> Política de privacitat</li>
              <li> Cookies</li>
            </ul>
            <ul className={styles.footer__llistes__links}>
              <li>
                <b>Motor </b>
              </li>
              <li> Particulars </li> <li> Professionals </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
