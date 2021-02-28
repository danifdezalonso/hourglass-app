import React from "react";
import styles from "./ChatAsideCard.module.scss";

const ChatAsideCard = () => {
  return (
    <div className={styles.chat__layout__leftside__chatContainer__miniCard}>
      <div
        className={styles.chat__layout__leftside__chatContainer__miniCard__img}
      >
        <img
          src="https://images.pexels.com/photos/1586141/pexels-photo-1586141.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </div>
      <div
        className={
          styles.chat__layout__leftside__chatContainer__miniCard__description
        }
      >
        <div
          className={
            styles.chat__layout__leftside__chatContainer__miniCard__description__user
          }
        >
          User
        </div>
        <div
          className={
            styles.chat__layout__leftside__chatContainer__miniCard__description__service
          }
        >
          Service
        </div>
      </div>
    </div>
  );
};

export default ChatAsideCard;
