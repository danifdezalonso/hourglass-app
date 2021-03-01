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
import TasquesNeteja from "../components/TasquesNeteja";
import Mecanica from "../components/Mecanica";
import Consultoria from "../components/Consultoria";
import Electricistes from "../components/Electricistes";
import Jardineria from "../components/Jardineria";
import Informatica from "../components/Informatica";
import Lampistes from "../components/Lampistes";
import Disseny from "../components/Disseny";
import PublicitatMarqueting from "../components/PublicitatMarqueting";
import Gossos from "../components/Gossos";
import Cangur from "../components/Cangur";
import Pintors from  "../components/Pintors";
import Mudances from  "../components/Mudances";
import FotoVideo from  "../components/FotoVideo";
import Idiomes from  "../components/IntercanviIdiomes";
import Cuina from  "../components/ClassesCuina";
import Particulars from  "../components/ClassesParticulars";
import MusicaBall from  "../components/ClassesMusicaBall";
import Massatges from  "../components/Massatges";
import Tractaments from  "../components/TractamentsCorporals";
import Perruquers from  "../components/Perruquers";
import Psicologia from  "../components/Psicologia";
import Dietistes from  "../components/Dietistes";
import Entrenadors from  "../components/EntrenadorsPersonals";
import Terapies from  "../components/TerapiesAlternatives";




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
            <Route exact path="/all-services" component={AllServices} />

            <Route exact path="/tasquesNeteja" component={TasquesNeteja} />
            <Route exact path="/electricistes" component={Electricistes} />
            <Route exact path="/jardineria" component={Jardineria} />
            <Route exact path="/lampistes" component={Lampistes} />
            <Route exact path="/pintors" component={Pintors} />
            <Route exact path="/mudances" component={Mudances} />

            <Route exact path="/informatica" component={Informatica} />
            <Route exact path="/disseny" component={Disseny} />
            <Route
              exact
              path="/publicitat-marqueting"
              component={PublicitatMarqueting}
            />
            <Route exact path="/fotografia-video" component={FotoVideo} />

            <Route exact path="/intercanvi-idiomes" component={Idiomes} />
            <Route exact path="/classes-cuina" component={Cuina} />
            <Route exact path="/classes-particulars" component={Particulars} />
            <Route exact path="/classes-musica-ball" component={MusicaBall} />

            <Route exact path="/massatges" component={Massatges} />
            <Route exact path="/tractaments-corporals" component={Tractaments} />
            <Route exact path="/perruquers" component={Perruquers} />
            <Route exact path="/psicologia" component={Psicologia} />
            <Route exact path="/dietistes" component={Dietistes} />
            <Route exact path="/entrenadors-personals" component={Entrenadors} />
            <Route exact path="/terapies-alternatives" component={Terapies} />

            <Route exact path="/consultoria" component={Consultoria} />
            <Route exact path="/mecanica" component={Mecanica} />
            <Route exact path="/passejar-gossos" component={Gossos} />
            <Route exact path="/cangur" component={Cangur} />
            <Route component={Page404} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default Dashboard;
