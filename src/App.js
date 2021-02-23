import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home.js";
import Chat from "./pages/Chat.js";
import Profile from "./pages/Profile.js";
import Footer from "./components/Footer";
import Favs from "./pages/Favs.js";
import AddItem from "./pages/AddItem.js";
import Page404 from "./pages/Page404.js";
import SignUpLogin from "./pages/SignUpLogin.js";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route exact path="/chat" component={SignUpLogin} />
          <Route exact path="/profile" component={SignUpLogin} />
          <Route exact path="/favs" component={SignUpLogin} />
          <Route exact path="/login" component={SignUpLogin} />
          <Route exact path="/add" component={SignUpLogin} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
