import React from "react";
import styles from "./ChatAside.module.scss";
import ChatAsideCard from "./ChatAsideCard";

const ChatAside = () => {
  return (
    <>
      <div className={styles.chat__layout__leftside__chatContainer}>
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
        <ChatAsideCard />
      </div>
    </>
  );
};

export default ChatAside;
