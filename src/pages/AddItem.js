import React from "react";
import styles from "./AddItem.module.scss";
import Select from "react-select";
import SERVEI_OPTIONS from "../components/Data/serveiOptions";
import { Link } from "react-router-dom";

const AddItem = () => {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to={window.location.pathname}>
              <li>Afegir servei</li>
            </Link>
          </ul>
          <div className={styles.card}>
            <div className={styles.card__section}>
              <div className={styles.card__title}>Quin servei pujaràs?</div>
              <div className={styles.card__subtitle}>Categoría</div>
              <Select options={SERVEI_OPTIONS} />
            </div>
            <div className={styles.card__section}>
              <div className={styles.card__subtitle}>Títol</div>
              <input className={styles.card__input__text} type="text" />
            </div>
            <div className={styles.card__section}>
              <div className={styles.card__subtitle}>Descripció</div>
              <textarea
                cols="400"
                rows="5"
                className={styles.card__input__text}
                type="text"
              />
            </div>
            <div className={styles.card__section}>
              <div className={styles.card__subtitle}>Imatge</div>
              <input
                type="file"
                id="image"
                name="avatar"
                accept="image/png, image/jpeg"
              />
            </div>
            <div className={styles.card__section}>
              <div className={styles.card__subtitle}>Ubicació</div>
              <input className={styles.card__input__text} type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
