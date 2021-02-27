import React from "react";
import styles from "./Filter.module.scss";
import ServeiPrincipal from "./ServeiPrincipal";
import IconLogo from "../images/Logo/Logo_negre.svg";
import IconAprenentatge from "../images/ServeisPrincipals/category_aprenentatge.svg";
import IconInformatica from "../images/ServeisPrincipals/category_informatica3.svg";
import IconMecanic from "../images/ServeisPrincipals/category_mechanics2.svg";
import IconLlar from "../images/ServeisPrincipals/category_llar3.svg";
import IconSpa from "../images/ServeisPrincipals/category_benestar.svg";
import IconConsultoria from "../images/ServeisPrincipals/category_consultoria.svg";
import IconAltres from "../images/ServeisPrincipals/category_altres.svg";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.filter__header}>Quin servei estàs buscant?</h1>
      <h4 className={styles.filter__subheader}>
        Els teus veïns estan disposats a ajudar-te, tu també hi vols participar?
        Uneix-t'hi.
      </h4>
      <div className={styles.filter__itemlist}>
        <Link to="/all">
          <ServeiPrincipal
            image={IconLogo}
            imageAlt="Icona de totes les categories"
            description="Totes les categoríes"
          />
        </Link>
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
        <Link to="/all-services">
          <ServeiPrincipal
            image={IconAltres}
            imageAlt="Altres"
            description="Altres"
          />
        </Link>
      </div>
    </div>
  );
};

export default Filter;

//CATEGORIES I SUB-CATEGORIES
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

//tecnologia
//informàtica
//Webs i applicacions
//Publicitat i marketing
//community managers
//dissenyadors
//fotògrafs
//filmmakers

//aprenentatge
//intercanvi d'idiomes
//classes de cuina
//classes particulars
//música
//ball

//mecànica
//cotxes i motos
//bicicletes i patinets

//benestar i bellesa
//massatges
//tractaments facials
//perruqueria
//psicologia
//coaching
//dietista
//entrenador personal

//

//Consultoria
//legal
//financera
//estratègica

//Altres
//passejador de gossos
//cangur
//fer la compra
