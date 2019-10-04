import React from "react";
import { Route } from "react-router-dom";
import Modal from "../components/modal/modal";
import SplashContainer from "./splash/splash_container";
import NavbarContainer from '../components/navbar/navbar_container';
import { Switch } from 'react-router-dom';
import Profile from './profile/profile'



const App = () => (
  <div>
    <Modal />
    <header>
      
      <Route exact path="/" component={SplashContainer} />
      <Route exact path="/feed" component={NavbarContainer} />
      <Route exact path="/profile/id" component={Profile} />
      
    </header>
  </div>
);

export default App;
