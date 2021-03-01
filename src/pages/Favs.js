import React from "react";
import Servei from "../components/Servei.js";
import Image1 from "../images/Serveis/fitxa-servei-img.jpg";
import styles from "./Favs.module.scss";
import { Link } from "react-router-dom";
import Image2 from "../images/Serveis/TasquesNeteja.jpg";
import Image3 from "../images/Serveis/actor.jpg";
import Image4 from "../images/Serveis/agent inmobiliari.jpg";

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
          
        <Link to="/ServiceDetail">
          <Servei
            title="Professor particular"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
            image={Image1}
            imageAlt="Descripció imatge 1"
          />
        </Link>
        <Link to="/ServiceDetail">
          <Servei
            title="Neteja d'espais"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
            image={Image2}
            imageAlt="Descripció imatge 1"
          />
        </Link>
        <Link to="/ServiceDetail">
          <Servei
            title="Professor particular"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
            image={Image3}
            imageAlt="Descripció imatge 1"
          />
        </Link>
        <Link to="/ServiceDetail">
          <Servei
            title="Professor particular"
            description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
            image={Image4}
            imageAlt="Descripció imatge 1"
          />
        </Link>
          
        </div>
      </div>
    </>
  );
};

export default Favs;
