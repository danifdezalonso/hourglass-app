import React from "react";
import styles from "./Profile.module.scss";
import SignUpLogin from "./SignUpLogin";

const Chat = ({ user, handleLogout }) => {
  return (
    <>
      <ul className={styles.breadcrumb}>
        <span className={styles.breadcrumb__left}>
          <li>Home</li>
          <li>Chat</li>
        </span>
      </ul>
      <h1>Els meus xats</h1>
    </>
  );
};

export default Chat;
