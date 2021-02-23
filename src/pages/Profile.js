import React from "react";

const Profile = ({ handleLogout }) => {
  return (
    <>
      <h1>Profile</h1>
      <button onClick={handleLogout}>Log out </button>
    </>
  );
};

export default Profile;
