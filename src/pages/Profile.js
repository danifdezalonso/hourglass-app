import React from "react";
import Login from "../components/Login";

const Profile = ({ handleLogout }) => {
  return (
    <>
      <h1>Benvinguda</h1>
      <button onClick={handleLogout}>Log out </button>
    </>
  );
};

export default Profile;
