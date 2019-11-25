import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_PIN } from '../actions/pin_actions'
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_USERS:
      debugger
      return Object.assign({}, state, action.users);
    case RECEIVE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_PIN:{
      return Object.assign({}, state, {[action.author.id]: action.author})
    }
    default:
      return state;
  }
}

export default usersReducer;
