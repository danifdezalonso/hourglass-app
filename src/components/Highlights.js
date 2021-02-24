import React from "react";
import generalStyles from "./App.module.scss";
import Servei from "./Servei";
import Image1 from "../images/Serveis/fitxa-servei-img.jpg";
import styles from "./Highlights.module.scss";

const Highlights = (props) => {
  return (
    <div className={styles.container__fluid}>
      <div className={generalStyles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.filter__itemlist}>
          <Servei
            title="Professor particular "
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
    </div>
  );
};

export default Highlights;
