import React from "react";
import generalStyles from "./App.module.scss";
import Categoria3 from "./Categoria3";
import styles from "./Highlights.module.scss";
import Mates from "../images/Serveis/Mates.jpg";
import Passejador from "../images/ServeisPrincipals/sub_category_dog.svg";
import Cangur from "../images/ServeisPrincipals/sub_category_kangaroo.svg";
import Comprar from "../images/ServeisPrincipals/sub_category_comprar.svg";


const Highlights3 = (props) => {
  return (
    <div className={styles.container__fluid}>
      <div className={generalStyles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.filter__itemlist}>
          <Categoria3
            title="Passejar gossos"
            description="55 serveis"
            image={Passejador}
            imageAlt="Descripció imatge 1"
          />
          <Categoria3
            title="Cangur"
            description="21 serveis"
            image={Cangur}
            imageAlt="Descripció imatge 1"
          />
          <Categoria3
            title="Fer la compra"
            description="16 serveis"
            image={Comprar}
            imageAlt="Descripció imatge 1"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights3;

//Altres
  //passejador de gossos
  //cangur
  //fer la compra