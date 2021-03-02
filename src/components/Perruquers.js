import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Disseny.module.scss";
import { db } from "../fire";
import Servei from "./Servei";

const Perruquers = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    db.collection("services")
      .where("option.value", "==", "perruqueria")
      .get()
      // .orderBy("date", "asc")
      .then((snapshot) => {
        setServices(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            option: doc.data().option.label,
            optionTag: doc.data().option.value,
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
              <li>Perruquers</li>
            </Link>
          </ul>
        </div>
        <h1 className={styles.filter__header}>Perruquers</h1>
        <div className={styles.container}>
          <p>contingut aqui</p>
        </div>
      </div>
    </div>
  );
};

export default Perruquers;
