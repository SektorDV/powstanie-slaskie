//biblioteki
import React, { useState, useEffect } from "react";
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
import AspectNotification from "./Components/AspectNotification/AspectNotification";
import { stat } from "fs";
import { tsPropertySignature } from "@babel/types";

const App = withRouter(({ location, ...props }) => {
  const getSize = () => {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth
    };
  };

  const [windowSize, setWindowSize] = useState(getSize());

  const handleResize = () => {
    setWindowSize(getSize());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      {windowSize.innerHeight < windowSize.innerWidth ? (
        <>
          <Header />
          <Pagination />

          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={{ enter: 600, exit: 300 }}
            >
              <section className="route-section">
                <Switch location={location}>
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

          {props.showModal ? <Modal /> : <></>}

          <Navbar />
        </>
      ) : (
        <AspectNotification />
      )}
    </div>
  );
});

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  };
};

export default connect(mapStateToProps)(App);
