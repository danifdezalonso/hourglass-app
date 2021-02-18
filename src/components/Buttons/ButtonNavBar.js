import React from "react";
import styles from "./ButtonNavBar.module.scss";
import IconPlus from "./ButtonIcons/IconPlus.js";

const ButtonNavBar = (props) => {
  return (
    <button className="button--navbar">
      <span className={styles.button__icon}>
        <IconPlus />
      </span>

      <span className={styles.button__text}>{props.text}</span>
    </button>
  );
};

export default ButtonNavBar;
