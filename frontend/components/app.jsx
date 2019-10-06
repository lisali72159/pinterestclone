
import React from "react";
import { Route } from "react-router-dom";
import Modal from "../components/modal/modal";
import SplashContainer from "./splash/splash_container";
import NavbarContainer from '../components/navbar/navbar_container';
import { Switch } from 'react-router-dom';
import ProfileContainer from './profile/profile_container';
import ProfileFormContainer from './profile/profile_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BoardContainer from './board/board_container';



const App = () => (
  <div>
    <Modal />
    <header>
      
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute exact path="/feed" component={NavbarContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/edit" component={ProfileFormContainer} />

      
    </header>
  </div>
);

export default App;
