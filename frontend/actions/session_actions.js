import * as SessionApiUtil from "../util/session_api_util";
import * as UserApiUtil from "../util/user_api_util";
import { RECEIVE_USERS } from "./user_actions";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const fetchAllUsers = users => ({
  type: RECEIVE_USERS,
  users
})

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = errors => {
  // debugger
return ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
}

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
})



export const login = user => dispatch =>
  SessionApiUtil.login(user).then(user =>
    dispatch(receiveCurrentUser(user)), errors =>
      dispatch(receiveErrors(errors.responseJSON))
  );

export const logout = () => dispatch =>
  SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()));

export const signup = user => dispatch =>
  SessionApiUtil.signup(user).then(user =>
    dispatch(receiveCurrentUser(user)), errors =>
      dispatch(receiveErrors(errors.responseJSON))
    );

export const edit = user => dispatch =>
    UserApiUtil.edit(user).then(user => dispatch(receiveCurrentUser(user)), 
    errors => dispatch(receiveErrors(errors.responseJSON))
    );

