import React from "react";
import { Route } from "react-router-dom";
import Modal from "../components/modal/modal";
import SplashContainer from "./splash/splash_container";
import SignupFormContainer from "./session/signup_form_container";

// const App = () => (
//   <div>
//     <Modal />
//     <header>

//       <Route exact path="/" component={SignupFormContainer} />

//     </header>

//   </div>
// );

const App = () => (
  <div>
    <Modal />
    <header>
      <Route exact path="/" component={SplashContainer} />
    </header>
  </div>
);

export default App;
