import React from "react";
import Servei from "../components/Servei.js";
import Image1 from "../images/Serveis/personal-teacher.jpg";
import SignUpLogin from "./SignUpLogin";
import styles from "./Profile.module.scss";

const Favs = ({ handleLogout, user }) => {
  return (
    <>
      {user ? (
        <>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Favs</li>
            </span>
            <span className={styles.breadcrumb__right}>
              <li>
                <button onClick={handleLogout}>Log out </button>
              </li>
            </span>
          </ul>
          <h1>Els meus favorits</h1>
          <Servei
            title="Professor particular"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
            image={Image1}
            imageAlt="Descripció imatge 1"
          />
          <Servei
            title="Professor particular"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
            image={Image1}
            imageAlt="Descripció imatge 1"
          />
        </>
      ) : (
        <SignUpLogin />
      )}
    </>
  );
};

export default Favs;
