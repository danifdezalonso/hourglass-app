import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home.js";
import Chat from "../pages/Chat.js";
import Profile from "../pages/Profile.js";
import Favs from "../pages/Favs.js";
import AddItem from "../pages/AddItem.js";
import Page404 from "../pages/Page404.js";
import Servei from "../pages/ServiceDetail.js";
import AllServices from "../components/AllServices";
import All from "../components/All";
import Llar from "../components/Llar";
import Tecnologia from "../components/Tecnologia";
import Aprenentatge from "../components/Aprenentatge";
import Benestar from "../components/Benestar";
import Mecanica from "../components/Mecanica";
import Consultoria from "../components/Consultoria";
import Electricistes from "../components/Electricistes";
import Jardineria from "../components/Jardineria";
import Informatica from "../components/Informatica";
import Lampistes from "../components/Lampistes";
import WebApps from "../components/WebApps";
import PublicitatMarqueting from "../components/PublicitatMarqueting";
import Dissenyadors from "../components/Dissenyadors";
import Gossos from "../components/Gossos";
import Cangur from "../components/Cangur";
import Compra from "../components/Compra";
import Neteja from "../components/Neteja";
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
            <Route exact path="/ServiceDetail" component={Servei} />
            <Route exact path="/all" component={All} />
            <Route exact path="/llar" component={Llar} />
            <Route exact path="/tecnologia" component={Tecnologia} />
            <Route exact path="/aprenentatge" component={Aprenentatge} />
            <Route exact path="/benestar" component={Benestar} />
            <Route exact path="/mecanica" component={Mecanica} />
            <Route exact path="/consultoria" component={Consultoria} />
            <Route exact path="/all-services" component={AllServices} />
            <Route exact path="/electricistes" component={Electricistes} />
            <Route exact path="/jardineria" component={Jardineria} />
            <Route exact path="/neteja" component={Neteja} />
            <Route exact path="/lampistes" component={Lampistes} />
            <Route exact path="/informatica" component={Informatica} />
            <Route exact path="/web-apps" component={WebApps} />
            <Route
              exact
              path="/publicitat-marqueting"
              component={PublicitatMarqueting}
            />
            <Route exact path="/dissenyadors" component={Dissenyadors} />
            <Route exact path="/passejar-gossos" component={Gossos} />
            <Route exact path="/cangur" component={Cangur} />
            <Route exact path="/compra" component={Compra} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default Dashboard;
