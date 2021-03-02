import React, { useState } from "react";
import styles from "./AddItem.module.scss";
import ButtonNavBar from "../components/Buttons/ButtonNavBar";
import { db, storage } from "../fire";
import Select from "react-select";
import SERVEI_OPTIONS from "../components/Data/serveiOptions";
import { Link } from "react-router-dom";

const AddItem2 = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [url, setURL] = useState("");
  const [date, setDate] = useState("");
  const [option, setOption] = useState("");

  function handleChange(e) {
    setImage(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entra a la funció");
    storage
      .ref(`/images/${image.name}`)
      .put(image)
      .then(() =>
        storage
          .ref(`/images/${image.name}`)
          .getDownloadURL()
          .then((url) => {
            setImage(null);
            setURL(url);
            db.collection("services")
              .add({
                title: title,
                description: description,
                location: location,
                date: date,
                option: option,
                url: url,
              })
              .then(() => {
                alert("El teu servei s'ha pujat! 👍");
                // console.log(url);
              })
              .catch((error) => {
                alert(error.message);
              });
          })
      );

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
              <div className={styles.card__section}>
                <div className={styles.card__title}>Quin servei pujaràs?</div>
              </div>
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
                <div className={styles.card__subtitle}>
                  Categoría
                  <Select
                    onChange={(option) => setOption(option)} //al fer clic es queda el seccioant marcat
                    value={[option]}
                    options={SERVEI_OPTIONS} //importa les opcions de l'arxiu
                    required // és obligatori
                  />
                </div>
              </div>
              <div className={styles.card__section}>
                <div className={styles.card__subtitle}>Imatge</div>
                <input
                  type="file"
                  id="image"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  onChange={handleChange}
                  required
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
                <div className={styles.card__subtitle}>Data</div>
                <input
                  className={styles.card__input__text}
                  type="date"
                  value={date}
                  required
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className={styles.card__section}>
                <div className={styles.card__section__button}>
                  <ButtonNavBar text="Afegir servei" type="submit" />
                </div>
                {/* <button
                  type="submit"
                  style={{ background: loader ? "#B34180" : "#a2035b" }}
                >
                  Afegir
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddItem2;
