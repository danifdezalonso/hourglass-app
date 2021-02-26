import React from "react";
import generalStyles from "./App.module.scss";
import Categoria2 from "./Categoria2";
import Image1 from "../images/Serveis/fitxa-servei-img.jpg";
import styles from "./Highlights.module.scss";
import Informatica from "../images/ServeisPrincipals/sub_category_informatica.svg";
import Web from "../images/ServeisPrincipals/sub_category_computer.svg"
import Publi from "../images/ServeisPrincipals/sub_category_publicitat.svg"
import Disseny from "../images/ServeisPrincipals/sub_category_disseny.svg"

const Highlights2= (props) => {
  return (
    <div className={styles.container__fluid}>
      <div className={generalStyles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.filter__itemlist}>
          <Categoria2
            title="Informàtica"
            description="28 serveis"
            image={Informatica}
            imageAlt="Descripció imatge 1"
          />
          <Categoria2
            title="Webs i Apps"
            description="36 serveis"
            image={Web}
            imageAlt="Descripció imatge 1"
          />
          <Categoria2
            title="Publicitat i Màrqueting"
            description="21 serveis"
            image={Publi}
            imageAlt="Descripció imatge 1"
          />
          <Categoria2
            title="Dissenyadors"
            description="21 serveis"
            image={Disseny}
            imageAlt="Descripció imatge 1"
          />
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
