import React from "react";
import styles from "./Login.module.scss";
import GifJoinUs from "../images/gif/joinUs.webp";

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
    name,
    setName,
  } = props;

  return (
    <div className={styles.containerFluid}>
      <div className={styles.container}>
        <div className={styles.card}>
          <img
            style={{ width: "160px", marginBottom: "16px" }}
            src={GifJoinUs}
            alt="Join us..."
          />

          <div className={styles.card__title}>Benvinguda a Hourglass</div>
          <div className={styles.card__subtitle}>
            Registra't o inicia sessió
          </div>
          <div className={styles.card__email}>
            <label>El teu usuari:</label>
            <input
              type="text"
              autoFocus
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p> {emailError} </p>
          </div>
          <div className={styles.card__email}>
            <label>E-mail:</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p> {emailError} </p>
          </div>
          <div className={styles.card__password}>
            <label>Contrasenya:</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
            <p> {passwordError} </p>
          </div>
          {hasAccount ? (
            <>
              <div className={styles.card__button}>
                <button onClick={handleLogin}> Accedir </button>
              </div>
              <div className={styles.card__paragraph}>
                <p>
                  No tens un compte?
                  <span
                    className={styles.card__paragraph__span}
                    onClick={() => setHasHaccount(!hasAccount)}
                  >
                    Crear un compte{" "}
                  </span>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className={styles.card__button}>
                <button onClick={handleSignup}> Crear compte </button>{" "}
              </div>
              <div className={styles.card__paragraph}>
                <p>
                  Tens un compte?
                  <span
                    className={styles.card__paragraph__span}
                    onClick={() => setHasHaccount(!hasAccount)}
                  >
                    Accedir{" "}
                  </span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
