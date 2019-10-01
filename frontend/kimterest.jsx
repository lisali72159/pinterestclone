import React from 'react';
import ReactDOM from 'react-dom';
import {login, logout, signup } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Kimterest the real deal</h1>, root);
  window.login = login;
})