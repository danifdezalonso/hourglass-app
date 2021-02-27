import React, { useState } from "react";
import styles from "./AddItem.module.scss";
import Select from "react-select";
import SERVEI_OPTIONS from "../components/Data/serveiOptions";
import { Link } from "react-router-dom";
import { db, storage } from "../fire";

const AddItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("services")
      .add({
        title: title,
        description: description,
        location: location,
        image: image,
      })
      .then(() => {
        setLoader(false);
        alert("El teu servei s'ha pujat! 👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setTitle("");
    setDescription("");
    setLocation("");
  };

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
          {/* Component comença aqui: */}

          <div className={styles.card}>
            <form onSubmit={handleSubmit}>
              {/* <div className={styles.card__section}>
                <div className={styles.card__title}>Quin servei pujaràs?</div>
                <div className={styles.card__subtitle}>Categoría</div>
                <Select options={SERVEI_OPTIONS} required />
              </div> */}
              <div className={styles.card__section}>
                <div className={styles.card__subtitle}>Títol</div>
                <input
                  className={styles.card__input__text}
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              <div className={styles.card__section}>
                <div className={styles.card__subtitle}>Descripció</div>
                <textarea
                  cols="400"
                  rows="5"
                  className={styles.card__input__text}
                  required
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className={styles.card__section}>
                <div className={styles.card__subtitle}>Imatge</div>
                <input
                  type="file"
                  id="image"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  value={image}
                />
              </div>
              <div className={styles.card__section}>
                <div className={styles.card__subtitle}>Ubicació</div>
                <input
                  className={styles.card__input__text}
                  type="text"
                  value={location}
                  required
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className={styles.card__section}>
                <button
                  type="submit"
                  style={{ background: loader ? "#B34180" : "#a2035b" }}
                >
                  Afegir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem;
