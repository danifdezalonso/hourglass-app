import React from "react";
import styles from "./Disseny.module.scss";
import { Link } from "react-router-dom";
import Servei from "./Servei.js";

import Image1 from "../images/Serveis/TasquesNeteja2.jpg";
import Image2 from "../images/Serveis/actor.jpg";
import Image3 from "../images/Serveis/TasquesNeteja.jpg";
import Image4 from "../images/Serveis/agent inmobiliari.jpg";
import Image5 from "../images/Serveis/TasquesNeteja4.jpg";
import Image6 from "../images/Serveis/fitxa-servei-img.jpg";
import Image7 from "../images/Serveis/TasquesNeteja3.jpeg";

const All = () => {
  return (
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
    <div className={styles.containerFlex}>
    
    <Link to="/ServiceDetail">
    <Servei
    title="Neteja a fons"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
    image={Image1}
    imageAlt="Descripció imatge 1"
    />
    </Link>
    
    <Link to="/ServiceDetail">
    <Servei
    title="Actor"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
    image={Image2}
    imageAlt="Descripció imatge 1"
    />
    </Link>
    
    <Link to="/ServiceDetail">
    <Servei
    title="Espais super nets"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
    image={Image3}
    imageAlt="Descripció imatge 1"
    />
    </Link>
    
    <Link to="/ServiceDetail">
    <Servei
    title="Agent Inmobiliari"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
    image={Image4}
    imageAlt="Descripció imatge 1"
    />
    </Link>
    
    <Link to="/ServiceDetail">
    <Servei
    title="Netejo espais"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
    image={Image5}
    imageAlt="Descripció imatge 1"
    />
    </Link>
    
    <Link to="/ServiceDetail">
    <Servei
    title="Professor particular"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
    image={Image6}
    imageAlt="Descripció imatge 1"
    />
    </Link>
    
    <Link to="/ServiceDetail">
    <Servei
    title="Netejo cases"
    description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
    image={Image7}
    imageAlt="Descripció imatge 1"
    />
    </Link>
    
    </div>
    </div>
    </div>
    );
  };
  
  export default All;
  