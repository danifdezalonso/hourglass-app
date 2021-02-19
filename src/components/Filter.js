import React from "react";
import generalStyles from "./App.module.scss"; // Reset i CSS general
import styles from "./Filter.module.scss";
import ServeiPrincipal from "./ServeiPrincipal";
import IconTotes from "../images/ServeisPrincipals/category_All.svg";
import IconCuraPersones from "../images/ServeisPrincipals/category_curaPersones.svg";
import IconProfessor from "../images/ServeisPrincipals/category_professor.svg";
import IconInformatica from "../images/ServeisPrincipals/category_informatica.svg";
import IconJardineria from "../images/ServeisPrincipals/category_gardening.svg";
import IconManetes from "../images/ServeisPrincipals/category_manetes.svg";
import IconMecanic from "../images/ServeisPrincipals/category_mechanics.svg";
import IconMudances from "../images/ServeisPrincipals/category_mudances.svg";
import IconLlar from "../images/ServeisPrincipals/category_llar.svg";

const Filter = () => {
  return (
    <div className={generalStyles.container}>
      <h1 className={styles.filter__header}>Quins serveis estàs buscant?</h1>
      <h4 className={styles.filter__subheader}>
        Els teus veïns estan disposats a ayudar-te, tu també vols participar?
        Uneix-t'hi.
      </h4>
      <div className={styles.filter__itemlist}>
        <ServeiPrincipal
          image={IconTotes}
          imageAlt="Icona de totes les categories"
          description="Totes les categoríes"
        />
        <ServeiPrincipal
          image={IconProfessor}
          imageAlt="Icona de classes particulars"
          description="Classes particulars"
        />
        <ServeiPrincipal
          image={IconCuraPersones}
          imageAlt="Icona de cura de persones"
          description="Cura de persones"
        />
        <ServeiPrincipal
          image={IconInformatica}
          imageAlt="Icona d'Informàtica'"
          description="Informàtica"
        />
        <ServeiPrincipal
          image={IconJardineria}
          imageAlt="Icona de Jardineria"
          description="Jardineria"
        />
        <ServeiPrincipal
          image={IconManetes}
          imageAlt="Icona de manetes"
          description="Manetes"
        />
        <ServeiPrincipal
          image={IconMecanic}
          imageAlt="Icona de Mecànica"
          description="Mecànica"
        />
        <ServeiPrincipal
          image={IconMudances}
          imageAlt="Icona de mudances"
          description="Mudances"
        />
        <ServeiPrincipal
          image={IconLlar}
          imageAlt="Icona de tasques de la llar"
          description="Tasques de la llar"
        />
        {/* <ServeiPrincipal
          image={IconTotes}
          imageAlt="Icona de totes les categories"
          description="Totes les categoríes"
        /> */}
      </div>
    </div>
  );
};

export default Filter;
