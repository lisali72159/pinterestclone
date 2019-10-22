
import React from "react";
import { Route } from "react-router-dom";
import Modal from "../components/modal/modal";
import SplashContainer from "./splash/splash_container";
import NavbarContainer from '../components/navbar/navbar_container';
import { Switch } from 'react-router-dom';
import ProfileContainer from './profile/profile_container';
import ProfileFormContainer from './profile/profile_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import BoardIndexContainer from './board/board_index_container';
import PinFormContainer from './pin/pin_form_container';
import PinIndexContainer from './pin/pin_index_container';
import PinShowContainer from './pin/pin_show_container';



const App = () => (
  <div>
    <Modal />
    <header>
      
      <AuthRoute exact path="/" component={SplashContainer} />
      <ProtectedRoute path="/" component={NavbarContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/edit" component={ProfileFormContainer} />
      <ProtectedRoute exact path="/pin-builder" component={PinFormContainer} />
      <ProtectedRoute exact path="/feed" component={PinIndexContainer} />   
      <ProtectedRoute exact path="/pins/:id" component={PinShowContainer} />   

    </header>
  
  </div>

);

export default App;
