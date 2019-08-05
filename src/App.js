//biblioteki
import React from 'react';
import './App.css';
import './res/fonts/fonts.scss';
import Navbar from './Components/Navbar/Navbar';
import { Route } from "react-router-dom";
import {connect} from 'react-redux';

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
import Modal from './Components/Modal/Modal';
import { stat } from 'fs';
import { tsPropertySignature } from '@babel/types';


function App(props) {
  return (
    <div className="App">
        {props.showModal ? <Modal /> : null}
        <Header />
        <Pagination />



        <Route path="/" exact component = {Intro}/>

        <Route path="/" exact render = {() => <Intro kaczka={true}/>}/>

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

const mapStateToProps = (state, ownProps) => {
  return {
    showModal: state.showModal
  }
}

export default connect(mapStateToProps)(App);
