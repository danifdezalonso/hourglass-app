import React from "react";

const SearchBar = () => {
  const BarStyling = {
    width: "30rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    height: "32px",
    borderRadius: "80px",
    paddingLeft: "2rem",
  };
  return <input style={BarStyling} placeholder={"Cerca..."} />;
};

export default SearchBar;
