//biblioteki
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

//widoki routera
import Intro from './Views/Intro/Intro';
import PoWojnie from './Views/PoWojnie/PoWojnie';

function App() {
  return (
    <div className="App">
        <Route path="/" exact component = {withRouter(Intro)} />
        <Route path="/PoWojnie" component = {PoWojnie} />
        {/* <Route path="/Korfanty" exact component = {Korfanty} /> */}
        {/* <Route path="/IPowstanie" exact component = {IPowstanie} /> */}
        {/* <Route path="/IIPowstanie" exact component = {IIPowstanie} /> */}
        {/* <Route path="/Plebiscyt" exact component = {Plebiscyt} /> */}
        {/* <Route path="/IIIPowstanie" exact component = {IIIPowstanie} /> */}
        {/* <Route path="/Skutki" exact component = {Skutki} /> */}
        <Navbar />
    </div>
  );
}

export default App;
