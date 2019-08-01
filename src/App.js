//biblioteki
import React from 'react';
import './App.css';
import './res/fonts/fonts.scss';
import Navbar from './Components/Navbar/Navbar';
import { Route } from "react-router-dom";

//widoki routera
import Intro from './Views/Intro/Intro';
import PoWojnie from './Views/PoWojnie/PoWojnie';
import IIIPowstanie from './Views/IIIPowstanie/IIIPowstanie';
import IIPowstanie from './Views/IIPowstanie/IIPowstanie';
import IPowstanie from './Views/IPowstanie/IPowstanie';
import Korfanty from './Views/Korfanty/Korfanty';
import Plebiscyt from './Views/Plebiscyt/Plebiscyt';
import Skutki from './Views/Skutki/Skutki';
import Pagination from './Components/Pagination/Pagination';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
        <Header />
        <Pagination />
        <Route path="/" exact component = {Intro} />
        <Route path="/PoWojnie" exact component = {PoWojnie} />
        <Route path="/Korfanty" exact component = {Korfanty} />
        <Route path="/IPowstanie" exact component = {IPowstanie} />
        <Route path="/IIPowstanie" exact component = {IIPowstanie} />
        <Route path="/Plebiscyt" exact component = {Plebiscyt} />
        <Route path="/IIIPowstanie" exact component = {IIIPowstanie} />
        <Route path="/Skutki" exact component = {Skutki} />
        <Navbar />
    </div>
  );
}

export default App;
