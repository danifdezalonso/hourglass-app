import React, { useState, useEffect } from "react";
import { fire } from "../fire";
import Login from "../components/Login.js";
import Dashboard from "../pages/Dashboard";

const SignUpLogin = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [hasAccount, setHasHaccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setName("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
    setNameError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <>
      {user ? (
        <>
          <Dashboard handleLogout={handleLogout} user={user} />
        </>
      ) : (
        <>
          <Login
            user={user}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasHaccount={setHasHaccount}
            emailError={emailError}
            passwordError={passwordError}
            name={name}
            setName={setName}
          />
        </>
      )}
    </>
  );
};

export default SignUpLogin;
