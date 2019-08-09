//biblioteki
import React from "react";
import "./App.css";
import "./res/fonts/fonts.scss";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

//widoki routera
import Intro from "./Views/Intro/Intro";
import PoWojnie from "./Views/PoWojnie/PoWojnie";
import IIIPowstanie from "./Views/IIIPowstanie/IIIPowstanie";
import IIPowstanie from "./Views/IIPowstanie/IIPowstanie";
import IPowstanie from "./Views/IPowstanie/IPowstanie";
import Korfanty from "./Views/Korfanty/Korfanty";
import Plebiscyt from "./Views/Plebiscyt/Plebiscyt";
import Skutki from "./Views/Skutki/Skutki";
import Pagination from "./Components/Pagination/Pagination";
import Header from "./Components/Header/Header";
import Modal from "./Components/Modal/Modal";
import { stat } from "fs";
import { tsPropertySignature } from "@babel/types";

const App = withRouter(({location, ...props}) => {
  return (
    <div className="App">
     
      <Header />
      <Pagination />

      <TransitionGroup className="transition-group">
        <CSSTransition key={location.key} classNames='fade' timeout={{enter: 600, exit: 300}}>
        <section className="route-section">
          <Switch location={location}>
            <Route path="/powstanieslaskie/" component={Intro} />
            <Route path="/" exact component={Intro} />
            <Route path="/PoWojnie" exact component={PoWojnie} />
            <Route path="/Korfanty" exact component={Korfanty} />
            <Route path="/IPowstanie" exact component={IPowstanie} />
            <Route path="/IIPowstanie" exact component={IIPowstanie} />
            <Route path="/Plebiscyt" exact component={Plebiscyt} />
            <Route path="/IIIPowstanie" exact component={IIIPowstanie} />
            <Route path="/Skutki" exact component={Skutki} />
          </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>

          {props.showModal ?<Modal /> : <></>}

      <Navbar />
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal
  };
};

export default connect(mapStateToProps)(App);
