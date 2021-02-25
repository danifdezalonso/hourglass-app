import React from "react";
import styles from "./Profile.module.scss";

const Chat = ({ user, handleLogout }) => {
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
      </div>
    </>
  );
};

export default Chat;
