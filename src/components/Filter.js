import React from "react";
import styles from "./Filter.module.scss";
import ServeiPrincipal from "./ServeiPrincipal";
import IconLogo from "../images/Logo/Logo_negre.svg";
import { Link } from "react-router-dom";

import IconNeteja from "../images/ServeisPrincipals/sub_category_llar.svg";
import IconElectricista from "../images/ServeisPrincipals/sub_category_electricista.svg";
import IconJardiner from "../images/ServeisPrincipals/sub_category_gardening.svg";
import IconLampista from "../images/ServeisPrincipals/sub_category_lampista.svg";
import IconPintor from "../images/ServeisPrincipals/sub_category_pintura.svg";
import IconMudances from "../images/ServeisPrincipals/category_mudances.svg";

import IconInformatica from "../images/ServeisPrincipals/category_informatica3.svg";
import IconDisseny from "../images/ServeisPrincipals/sub_category_disseny.svg";
import IconPublicitat from "../images/ServeisPrincipals/sub_category_publicitat.svg";
import IconFotografia from "../images/ServeisPrincipals/sub_category_camera.svg";

import IconIdiomes from "../images/ServeisPrincipals/sub_category_idiomes.svg";
import IconCuina from "../images/ServeisPrincipals/sub_category_cooking.svg";
import IconParticulars from "../images/ServeisPrincipals/category_aprenentatge.svg";
import IconMusica from "../images/ServeisPrincipals/sub_category_musica.svg";

import IconMassatges from "../images/ServeisPrincipals/sub_category_massatges.svg";
import IconTractaments from "../images/ServeisPrincipals/sub_category_tractaments.svg";
import IconPerruqueria from "../images/ServeisPrincipals/sub_category_perruqueria.svg";
import IconPsicologia from "../images/ServeisPrincipals/sub_category_psicologia.svg";
import IconDietista from "../images/ServeisPrincipals/sub_category_dietista.svg";
import IconEntrenador from "../images/ServeisPrincipals/sub_category_entrenador.svg";
import IconTerapies from "../images/ServeisPrincipals/category_benestar.svg";

import IconConsultoria from "../images/ServeisPrincipals/category_consultoria.svg";

import IconMecanic from "../images/ServeisPrincipals/category_mechanics2.svg";

import IconPassejador from "../images/ServeisPrincipals/sub_category_dog.svg";

import IconCangur from "../images/ServeisPrincipals/sub_category_kangaroo.svg";

import IconAltres from "../images/ServeisPrincipals/category_altres.svg";



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
        <Link to="/tasquesNeteja">
          <ServeiPrincipal
            image={IconNeteja}
            imageAlt="Icona Tasques de Neteja"
            description="Tasques de Neteja"
          />
        </Link>
        <Link to="/electricistes">
          <ServeiPrincipal
            image={IconElectricista}
            imageAlt="Icona Electricista"
            description="Electricistes"
          />
        </Link>
        <Link to="/jardineria">
          <ServeiPrincipal
            image={IconJardiner}
            imageAlt="Icona Jardiner"
            description="Jardiners"
          />
        </Link>
        <Link to="/lampistes">
          <ServeiPrincipal
            image={IconLampista}
            imageAlt="Icona Lampista"
            description="Lampistes"
          />
        </Link>
        <Link to="/pintors">
          <ServeiPrincipal
            image={IconPintor}
            imageAlt="Icona Pintor"
            description="Pintors"
          />
        </Link>
        <Link to="/mudances">
          <ServeiPrincipal
            image={IconMudances}
            imageAlt="Icona Mudances"
            description="Mudances"
          />
        </Link>


        <Link to="/informatica">
          <ServeiPrincipal
            image={IconInformatica}
            imageAlt="Icona d'Informàtica"
            description="Informàtics"
          />
        </Link>
        <Link to="/disseny">
          <ServeiPrincipal
            image={IconDisseny}
            imageAlt="Icona de disseny"
            description="Disseny i programació"
          />
        </Link>
        <Link to="/publicitat-marqueting">
          <ServeiPrincipal
            image={IconPublicitat}
            imageAlt="Icona de publicitat"
            description="Publicitat i Màrqueting"
          />
        </Link>
        <Link to="/fotografia-video">
          <ServeiPrincipal
            image={IconFotografia}
            imageAlt="Icona de Fotografia i Video"
            description="Fotografia i Video"
          />
        </Link>



        <Link to="/intercanvi-idiomes">
          <ServeiPrincipal
            image={IconIdiomes}
            imageAlt="Icona d'idiomes"
            description="Inercanvi d'idiomes"
          />
        </Link>
        <Link to="/classes-cuina">
          <ServeiPrincipal
            image={IconCuina}
            imageAlt="Icona de cuina"
            description="Classes de cuina"
          />
        </Link>
        <Link to="/classes-particulars">
          <ServeiPrincipal
            image={IconParticulars}
            imageAlt="Icona de classes particulars"
            description="Classes particulars"
          />
        </Link>
        <Link to="/classes-musica-ball">
          <ServeiPrincipal
            image={IconMusica}
            imageAlt="Icona de classes de música i ball"
            description="Classes de música i ball"
          />
        </Link>


        <Link to="/massatges">
          <ServeiPrincipal
            image={IconMassatges}
            imageAlt="Icona massatges"
            description="Massatges"
          />
        </Link>
        <Link to="/tractaments-corporals">
          <ServeiPrincipal
            image={IconTractaments}
            imageAlt="Icona tractaments"
            description="Tractaments corporals"
          />
        </Link>
        <Link to="/perruquers">
          <ServeiPrincipal
            image={IconPerruqueria}
            imageAlt="Icona Perruqueria"
            description="Perruquers"
          />
        </Link>
        <Link to="/psicologia">
          <ServeiPrincipal
            image={IconPsicologia}
            imageAlt="Icona Psicologia"
            description="Psicologia"
          />
        </Link>
        <Link to="/dietistes">
          <ServeiPrincipal
            image={IconDietista}
            imageAlt="Icona Dietista"
            description="Dietistes"
          />
        </Link>
        <Link to="/entrenadors-personals">
          <ServeiPrincipal
            image={IconEntrenador}
            imageAlt="Entrenador Personal"
            description="Entrenadors Personals"
          />
        </Link>
        <Link to="/terapies-alternatives">
          <ServeiPrincipal
            image={IconTerapies}
            imageAlt="Icona Terapies"
            description="Terapies alternatives"
          />
        </Link>

        <Link to="/consultoria">
          <ServeiPrincipal
            image={IconConsultoria}
            imageAlt="Icona de consultoria"
            description="Consultoria"
          />
        </Link>

        <Link to="/mecanica">
          <ServeiPrincipal
            image={IconMecanic}
            imageAlt="Icona de Mecànica"
            description="Mecànics"
          />
        </Link>

        <Link to="/passejar-gossos">
          <ServeiPrincipal
            image={IconPassejador}
            imageAlt="Icona de passejador"
            description="Passejadors de gossos"
          />
        </Link>

        <Link to="/cangur">
          <ServeiPrincipal
            image={IconCangur}
            imageAlt="Icona de Cangur"
            description="Cangurs"
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