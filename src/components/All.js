import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Disseny.module.scss";
import { db } from "../fire";
import Servei from "./Servei";

const All = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    db.collection("services")
      .orderBy("date", "asc")
      .onSnapshot((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            image: doc.data().url,
          }))
        );
      });
  }, []);

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
          {services.map((service) => (
            <Servei
              image={service.image}
              title={service.title}
              description={service.description}
              option={service.option}
              optionTag={service.optionTag}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default All;
