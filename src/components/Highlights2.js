import React from "react";
import generalStyles from "./App.module.scss";
import Categoria2 from "./Categoria2";
import styles from "./Highlights.module.scss";
import Informatica from "../images/ServeisPrincipals/sub_category_informatica.svg";
import Web from "../images/ServeisPrincipals/sub_category_computer.svg";
import Publi from "../images/ServeisPrincipals/sub_category_publicitat.svg";
import Foto from "../images/ServeisPrincipals/sub_category_camera.svg";
import { Link } from "react-router-dom";

const Highlights2 = (props) => {
  return (
    <div className={styles.container__fluid}>
      <div className={generalStyles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.filter__itemlist}>
          <Link to="/informatica">
            <Categoria2
              title="Informàtica"
              image={Informatica}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/disseny">
            <Categoria2
              title="Dissenyadors i Programadors"
              image={Web}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/publicitat-marqueting">
            <Categoria2
              title="Publicitat i Màrqueting"
              image={Publi}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/fotografia-video">
            <Categoria2
              title="Fotografia i Video"
              image={Foto}
              imageAlt="Descripció imatge 1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Highlights2;

//tecnologia
//informàtica
//Webs i applicacions
//Publicitat i marketing
//dissenyadors
//fotògrafs
//filmmakers
