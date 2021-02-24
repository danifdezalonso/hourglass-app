import React from "react";
import styles from "./Profile.module.scss";
import SignUpLogin from "./SignUpLogin";

const Chat = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <>
          <ul className={styles.breadcrumb}>
            <span className={styles.breadcrumb__left}>
              <li>Home</li>
              <li>Chat</li>
            </span>
            <span className={styles.breadcrumb__right}>
              <li>
                <button onClick={handleLogout}>Log out </button>
              </li>
            </span>
          </ul>
          <h1>Els meus xats</h1>
        </>
      ) : (
        <SignUpLogin />
      )}
    </>
  );
};

export default Chat;
