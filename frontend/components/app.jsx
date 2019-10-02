import React from 'react';
import { Route } from 'react-router-dom';
import Modal from '../components/modal/modal';

import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Modal />
    <header>
      
      <Route exact path="/" component={SignupFormContainer} />
      
    </header>
   
  </div>
);

export default App;