import React, { useState, useEffect } from "react";
import styles from "./ChatIndividual.module.scss";
import Message from "./Message.js";

const Chat = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "Dani", message: "Bon dia Ester" },
    { username: "Dani", message: "Com estàs?" },
    { username: "Dani", message: "Quan acabem això ens fotem 40 birres, oi?" },
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Com et dius?"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, message: input }]);
    setInput("");
  };

  return (
    <>
      {/* contingut aqui */}
      <h1>Hola {username}</h1>
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

      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </>
  );
};

export default Chat;
