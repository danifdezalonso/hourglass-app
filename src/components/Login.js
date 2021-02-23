import React from "react";
import Profile from "../pages/Profile.js";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasHaccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        autoFocus
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{emailError}</p>
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>{passwordError}</p>
      <div>
        {hasAccount ? (
          <>
            <button onClick={handleLogin}>Sign in</button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setHasHaccount(!hasAccount)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignup}>Sign up</button>
            <p>
              Have an account?{" "}
              <span onClick={() => setHasHaccount(!hasAccount)}>Sign in</span>
            </p>
          </>
        )}
      </div>
      Login
    </div>
  );
};

export default Login;
