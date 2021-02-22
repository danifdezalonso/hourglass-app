import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home.js";
import Chat from "./pages/Chat.js";
import Profile from "./pages/Profile.js";
import Footer from "./components/Footer";
import Favs from "./pages/Favs.js";
import AddItem from "./pages/AddItem.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch> */}
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
        <Route path="/favs" component={Favs} />
        <Route path="/add" component={AddItem} />

        {/* </Switch> */}
        <Footer />
      </div>
    </Router>
  );
}
