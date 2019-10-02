import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup } from "./util/session_api_util";
import Root from "./components/root"
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();
  ReactDOM.render(<Root store={store}/>, root);
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
})