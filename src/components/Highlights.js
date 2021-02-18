import React from "react";
import generalStyles from "./App.module.scss";
import Servei from "./Servei";
import Image1 from "../images/Serveis/personal-teacher.jpg"; // Reset i CSS general
import styles from "./Highlights.module.scss";

const Highlights = (props) => {
  return (
    <div className={generalStyles.container}>
      <h2>{props.title}</h2>
      <div className={styles.filter__itemlist}>
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
  );
};

export default Highlights;
