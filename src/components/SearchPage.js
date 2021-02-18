import React from "react";

const SearchBar = ({ keyword, setKeyword }) => {
  const BarStyling = {
    width: "40rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    height: "32px",
    borderRadius: "80px",
    paddingLeft: "2rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Cerca..."}
      onChange={(e) => setKeyword(e.target.value)}
    />
  );
};

export default SearchBar;
