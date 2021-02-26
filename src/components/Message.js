import React from "react";
import "./Message.css";

const Message = ({ message, username }) => {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && "message__user"}`}>
      <div className={isUser ? "message__userCard" : "message__guestCard"}>
        <p className="text-padding">
          {message.username} : {message.message}
        </p>
      </div>
    </div>
  );
};

export default Message;
