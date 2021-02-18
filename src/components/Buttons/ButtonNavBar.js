import React from "react";
import "./ButtonNavBar.module.scss";
import IconPlus from "./ButtonIcons/IconPlus.js";

const ButtonNavBar = (props) => {
  return (
    <button className="button--navbar">
      <IconPlus />
      {props.text}
    </button>
  );
};

export default ButtonNavBar;
