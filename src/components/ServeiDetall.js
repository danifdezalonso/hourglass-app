import React from "react";
import styles from "./ServeiDetall.module.scss";
import love from "../images/Icon/love.svg";

const ServeiDetall = (props) => {
  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div>
          <div className={styles.header__faker}></div>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Categoria</li>
              <li>Professor particular</li>
            </span>
          </ul>
        </div>
      </div>
      <div className={styles.box}>
        <div className={styles.box__upperCont}>
          <div className={styles.box__upperCont__user}>
            <div className={styles.box__upperCont__user__userImage}>
              <img src={props.userImage} alt={props.userImageAlt}></img>
            </div>
            <div className={styles.box__upperCont__user__name}>
              {props.name}
            </div>
          </div>
          <div className={styles.box__upperCont__favXat}>
            <div className={styles.box__upperCont__favXat__fav}>
              <img src={love} alt="fav"></img>
            </div>
            <button className={styles.box__upperCont__favXat__xat}>
              Xateja
            </button>
          </div>
        </div>

        <div className={styles.box__image}>
          <img src={props.image} alt={props.imageAlt} />
        </div>

        <div className={styles.box__details}>
          <div className={styles.box__details__title}>{props.title}</div>
          <div className={styles.box__details__categoria}>
            <span className={styles.box__details__categoria__tag}>
              Categoria{" "}
            </span>
            {props.categoria}
          </div>
          <div className={styles.box__details__etiquetes}>
            <span className={styles.box__details__etiquetes__etiqueta}>
              Etiquetes
            </span>
            {props.tags}
          </div>
          <div className={styles.box__details__description}>
            {props.description}
          </div>

          <div className={styles.box__details__localitzacio}>
            <p className={styles.box__details__localitzacio__barri}>
              {props.barri},&nbsp;{" "}
              <span className={styles.box__details__localitzacio__ciutat}>
                {props.ciutat}
              </span>
            </p>
            <div className={styles.box__details__data}>{props.data}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServeiDetall;
