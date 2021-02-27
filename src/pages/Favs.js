import React from "react";
import Servei from "../components/Servei.js";
import Image1 from "../images/Serveis/fitxa-servei-img.jpg";
import styles from "./Favs.module.scss";
import { Link } from "react-router-dom";

const Favs = () => {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div>
            <div className={styles.header__faker}></div>
            <ul className={styles.breadcrumb}>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to={window.location.pathname}>
                <li>Favorits</li>
              </Link>
            </ul>
          </div>
        </div>
        <h1>Els meus favorits</h1>
        <div className={styles.container__flex}>
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
          <Servei
            title="Professor particular"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
            image={Image1}
            imageAlt="Descripció imatge 1"
          />
        </div>
      </div>
    </>
  );
};

export default Favs;
