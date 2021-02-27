import React from "react";
import generalStyles from "./App.module.scss";
import Categoria from "./Categoria.js";
import styles from "./Highlights.module.scss";
import Jardineria from "../images/ServeisPrincipals/sub_category_gardening.svg";
import Neteja from "../images/ServeisPrincipals/sub_category_llar.svg";
import Electricista from "../images/ServeisPrincipals/sub_category_electricista.svg";
import Lampista from "../images/ServeisPrincipals/sub_category_lampista.svg";
import { Link } from "react-router-dom";

const Highlights = (props) => {
  return (
    <div className={styles.container__fluid}>
      <div className={generalStyles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.filter__itemlist}>
          <Link to="/neteja">
            <Categoria
              title="Tasques de neteja"
              description="55 serveis"
              image={Neteja}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/electricistes">
            <Categoria
              title="Electricistes"
              description="36 serveis"
              image={Electricista}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/jardineria">
            <Categoria
              title="Jardineria"
              description="30 serveis"
              image={Jardineria}
              imageAlt="Descripció imatge 1"
            />
          </Link>
          <Link to="/lampistes">
            <Categoria
              title="Lampistes"
              description="45 serveis"
              image={Lampista}
              imageAlt="Descripció imatge 1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Highlights;

//llar
//tasques de neteja
//electricistes
//Jardiners
//Lampistes
//fusters
//interiorisme
//muntador de mobles
//pintor
//mudances
