import React from "react";
import generalStyles from "./App.module.scss";
import Categoria3 from "./Categoria3";
import styles from "./Highlights.module.scss";
import Passejador from "../images/ServeisPrincipals/sub_category_dog.svg";
import Cangur from "../images/ServeisPrincipals/sub_category_kangaroo.svg";
import Consultoria from "../images/ServeisPrincipals/category_consultoria.svg";
import { Link } from "react-router-dom";

const Highlights3 = (props) => {
  return (
    <div className={styles.container__fluid}>
      <div className={generalStyles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.filter__itemlist}>
          <Link to="/passejar-gossos">
            <Categoria3
              title="Passejadors de gossos"
              image={Passejador}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/cangur">
            <Categoria3
              title="Cangurs"
              image={Cangur}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/consultoria">
            <Categoria3
              title="Consultoria"
              image={Consultoria}
              imageAlt="Descripció imatge 1"
            />
          </Link>
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
