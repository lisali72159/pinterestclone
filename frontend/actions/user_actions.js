import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';

const receiveUserInfo = user => ({
  type: RECEIVE_USER_INFO,
  user
});


export const edit = user => dispatch =>
 UserApiUtil.edit(user).then(user => dispatch(receiveUserInfo(user)));
