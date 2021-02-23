import React from "react";
import styles from "./ServeiDetall.module.scss";
import love from "../images/Icon/love.svg";
import star from "../images/Icon/star.svg";
import location from "../images/Icon/maps-and-flags.svg";

const ServeiDetall = (props) => {
  return (
    <div className={styles.box}>


      <div className={styles.box__userImage}>
        <img src={props.userImage} alt={props.userImageAlt} />
      </div>

      <div className={styles.box__userProfile}>
        <div className={styles.box__userProfile__name}>{props.name}</div>
        <div className={styles.box__userProfile__about}>{props.about}</div>
      </div>

      <div className={styles.box__containerFlex}>
        <div className={styles.box__containerFlex__iconStar}>  
          <img className={styles.box__containerFlex__iconStar__star} src={star} alt="star"></img>
          <img className={styles.box__containerFlex__iconStar__star} src={star} alt="star"></img>
          <img className={styles.box__containerFlex__iconStar__star} src={star} alt="star"></img>
          <img className={styles.box__containerFlex__iconStar__star} src={star} alt="star"></img>
          <img className={styles.box__containerFlex__iconStar__star} src={star} alt="star"></img>
        </div>
        <div className={styles.box__containerFlex__numValoracions}>{props.numValoracions}<p>&nbsp;Valoracions</p></div>
      </div>

      <button className={styles.box__xat}>Xat</button>

      <div className={styles.box__container}> 
        <img className={styles.box__container__fav} src={love} alt="fav"></img>
      </div>


      <div className={styles.box__title}>{props.title}</div>
      <div className={styles.box__description}>{props.description}</div>
      <div className={styles.box__image}>
        <img src={props.image} alt={props.imageAlt} />
      </div>

      <div className={styles.box__localitzacio}>
        <img className={styles.box__localitzacio__icon} src={location} alt="location icon"></img>
        <div className={styles.box__localitzacio__barri}>{props.barri},&nbsp;</div>
        <div className={styles.box__localitzacio__ciutat}>{props.ciutat}</div>
      </div>

      <button className={styles.box__button}>Contacta'm</button>
    </div>
  );
};

export default ServeiDetall;