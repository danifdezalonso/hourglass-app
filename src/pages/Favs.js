import React from "react";
import Servei from "../components/Servei.js";
import Image1 from "../images/Serveis/personal-teacher.jpg";
import SignUpLogin from "./SignUpLogin";
import styles from "./Profile.module.scss";
import { Redirect } from "react-router-dom";

const Favs = ({ handleLogout, user }) => {
  return (
    <>
      <ul className={styles.breadcrumb}>
        <span className={styles.breadcrumb__left}>
          <li>Home</li>
          <li>Favs</li>
        </span>
      </ul>
      <h1>Els meus favorits</h1>
    </>
  );
};

export default Favs;
