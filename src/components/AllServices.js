import React from "react";
import styles from "./AllServices.module.scss";
import Image1 from "../images/Serveis/actor.jpg";
import Image2 from "../images/Serveis/agent inmobiliari.jpg";
import Servei from "./Servei.js";
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
                <li>Altres Serveis</li>
              </Link>
            </ul>
          </div>
          <h1 className={styles.filter__header}>Altres Serveis</h1>
          <div className={styles.containerFlex}>
          <Link to="/ServiceDetail">
            <Servei
              title="Actor"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
              image={Image1}
              imageAlt="Descripció imatge 1"
            />
            </Link>
            <Link to="/ServiceDetail">
            <Servei
              title="Agent Inmobiliari"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, doloremque nobis, quae necessitatibus dolorem quas illo non minima possimus quibusdam repellendus deserunt odit explicabo."
              image={Image2}
              imageAlt="Descripció imatge 1"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
