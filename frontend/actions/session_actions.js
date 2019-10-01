import * as SessionApiUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveSessionErrors = error => ({
  type: RECEIVE_SESSION_ERRORS,
  error
});

const logoutCurrentUser = user => ({
  type: LOGOUT_CURRENT_USER,
  user
});

export const login = user => dispatch =>
  SessionApiUtil.login(user).then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch =>
  SessionApiUtil.logout().then(user => dispatch(logoutCurrentUser(user)));

export const signup = user => dispatch =>
  SessionApiUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)));
