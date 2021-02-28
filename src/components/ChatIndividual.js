import React, { useState, useEffect } from "react";
import styles from "./ChatIndividual.module.scss";
import Message from "./Message.js";
import { db } from "../fire";
import firebase from "firebase";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  useEffect(() => {
    setUsername(prompt("Com et dius?"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <>
      {/* contingut aqui */}
      <h1>Hola {username}</h1>

      {messages.map((message) => (
        <div className={styles.container}>
          <Message username={username} message={message} />
        </div>
      ))}
      <div className={styles.container}>
        <form onSubmit={sendMessage}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Envia missatge..."
          />
          <button disabled={!input} onClick={sendMessage}>
            Enviar missatge
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
