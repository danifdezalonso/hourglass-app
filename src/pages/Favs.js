import React from "react";
import Servei from "../components/Servei.js";
import Image1 from "../images/Serveis/fitxa-servei-img.jpg";
import styles from "./Favs.module.scss";

const Favs = () => {
  return (
    <>
      <ul className={styles.breadcrumb}>
        <span className={styles.breadcrumb__left}>
          <li>Home</li>
          <li>Favorits</li>
        </span>
      </ul>
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
    </>
  );
};

export default Favs;
