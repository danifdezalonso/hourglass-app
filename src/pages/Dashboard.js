import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home.js";
import Chat from "../pages/Chat.js";
import Profile from "../pages/Profile.js";
import Favs from "../pages/Favs.js";
import AddItem from "../pages/AddItem.js";
import Page404 from "../pages/Page404.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Dashboard = ({ handleLogout, user }) => {
  return (
    <>
      <Router>
        <div className="App">
          <Header handleLogout={handleLogout} />
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route exact path="/chat" component={Chat} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/favs" component={Favs} />
            <Route exact path="/add" component={AddItem} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default Dashboard;
