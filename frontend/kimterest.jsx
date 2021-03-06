import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup } from "./util/session_api_util";
import Root from "./components/root"
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUser: window.currentUser.id } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
})