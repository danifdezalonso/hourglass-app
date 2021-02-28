import React from "react";
import styles from "./Profile.module.scss";
import { Link } from "react-router-dom";

const Profile = ({ handleLogout, user }) => {
  return (
    <>
      <div className={styles.containerFluid}>
        <div className={styles.container}>
          <div>
            <div className={styles.header__faker}></div>
            <ul className={styles.breadcrumb}>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to={window.location.pathname}>
                <li>Profile</li>
              </Link>
            </ul>
          </div>

          <h1>El meu perfil</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            unde sequi animi deleniti suscipit, voluptates est libero minus ad,
            adipisci, quasi illo autem molestiae necessitatibus ea debitis
            corrupti consequuntur mollitia.
          </p>
        </div>

        {/* contingut aqui */}
      </div>
    </>
  );
};

export default Profile;
