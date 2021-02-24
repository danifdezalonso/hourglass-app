import React from "react";
import Error404 from "../images/gif/error404.gif";

import styles from "./Page404.module.scss";

const Page404 = () => {
  return (
    <div className={styles.container}>
      <img
        style={{
          width: "50%",
          height: "50%",
          marginBottom: "16px",
          marginTop: "40px",
        }}
        src={Error404}
        alt="Join us..."
      />
    </div>
  );
};

export default Page404;
