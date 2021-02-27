import React from "react";
import styles from "./AllServices.module.scss";
import ServeiPrincipal from "../components/ServeiPrincipal";
import IconAprenentatge from "../images/ServeisPrincipals/category_aprenentatge.svg";
import IconInformatica from "../images/ServeisPrincipals/category_informatica3.svg";
import IconMecanic from "../images/ServeisPrincipals/category_mechanics2.svg";
import IconLlar from "../images/ServeisPrincipals/category_llar3.svg";
import IconSpa from "../images/ServeisPrincipals/category_benestar.svg";
import IconConsultoria from "../images/ServeisPrincipals/category_consultoria.svg";
import { Link } from "react-router-dom";

const AllServices = () => {
  return (
    <div>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div>
            <div className={styles.header__faker}></div>
            <ul className={styles.breadcrumb}>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to={window.location.pathname}>
                <li>Tots els serveis</li>
              </Link>
            </ul>
          </div>
          <h1 className={styles.filter__header}>Tots els serveis</h1>
          <div className={styles.container}>
            <div className={styles.no_wrap}>
              <Link to="/llar">
                <ServeiPrincipal
                  image={IconLlar}
                  imageAlt="Icona de llar"
                  description="Llar"
                />
              </Link>
              <Link to="/tecnologia">
                <ServeiPrincipal
                  image={IconInformatica}
                  imageAlt="Icona d'Informàtica"
                  description="Tecnologia"
                />
              </Link>
              <Link to="/aprenentatge">
                <ServeiPrincipal
                  image={IconAprenentatge}
                  imageAlt="Icona d'Informàtica"
                  description="Aprenentatge"
                />
              </Link>
              <Link to="/benestar">
                <ServeiPrincipal
                  image={IconSpa}
                  imageAlt="Icona Spa"
                  description="Benestar"
                />
              </Link>
              <Link to="/mecanica">
                <ServeiPrincipal
                  image={IconMecanic}
                  imageAlt="Icona de Mecànica"
                  description="Mecànica"
                />
              </Link>
              <Link to="/consultoria">
                <ServeiPrincipal
                  image={IconConsultoria}
                  imageAlt="Icona de consultoria"
                  description="Consultoria"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
