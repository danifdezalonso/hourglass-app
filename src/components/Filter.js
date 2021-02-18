import React from "react";
import generalStyles from "./App.module.scss"; // Reset i CSS general
import styles from "./Filter.module.scss";
import Servei from "./Servei";
import Image1 from "../images/Serveis/personal-teacher.jpg";

const Filter = () => {
  return (
    <div className={generalStyles.container}>
      <h1 className={styles.filter__header}>Quins serveis estàs buscant?</h1>
      <h4 className={styles.filter__subheader}>
        Els teus veïns estan disposats a ayudar-te, tu també vols participar?
        Uneix-t'hi
      </h4>
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

export default Filter;
