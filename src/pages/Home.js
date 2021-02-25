import React from "react";
import Highlights from "../components/Highlights";
import Filter from "../components/Filter";
import styles from "../components/Highlights.module.scss";

const Home = () => {
  return (
    <>
      <div className={styles.header__faker}></div>
      <Filter />
      <div className={styles.containerFluid}>
        <Highlights title="Serveis destacats per la llar" />
        <Highlights title="Serveis destacats per estudiar" />
        <Highlights title="Serveis destacats de mecànica" />
      </div>
    </>
  );
};

export default Home;
