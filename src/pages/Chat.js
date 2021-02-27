import React from "react";
import styles from "./Profile.module.scss";
import ChatIndividual from "../components/ChatIndividual.js";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div>
            <div className={styles.header__faker}></div>
            <ul className={styles.breadcrumb}>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to={window.location.pathname}>
                <li>Chat</li>
              </Link>
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
