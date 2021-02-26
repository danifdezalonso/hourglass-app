import React from "react";
import styles from "./Profile.module.scss";
import ChatIndividual from "../components/ChatIndividual.js";

const Chat = () => {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div>
            <div className={styles.header__faker}></div>
            <ul className={styles.breadcrumb}>
              <span className={styles.breadcrumb__left}>
                <li>Home</li>
                <li>Chat</li>
              </span>
            </ul>
          </div>
        </div>
        <h1>Els meus xats</h1>
        {/* contingut aqui */}
        <ChatIndividual />
      </div>
    </>
  );
};

export default Chat;
