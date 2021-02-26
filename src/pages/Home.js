import React from "react";
import Highlights from "../components/Highlights.js";
import Highlights2 from "../components/Highlights2.js";
import Highlights3 from "../components/Highlights3.js";
import Filter from "../components/Filter.js";
import styles from "../components/Highlights.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.header__faker}></div>
      <Filter />
      <div className={styles.containerFluid}>
        <Highlights title="Destacats per la llar" />
        <Highlights2 title="Destacats de tecnologia" />
        <Highlights3 title="Altres serveis" />
      </div>
    </>
  );
};

export default Home;
