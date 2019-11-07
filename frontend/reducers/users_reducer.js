import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_PIN } from '../actions/pin_actions'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_PIN:{
    // debugger
      return Object.assign({}, state, {[action.author.id]: action.author})
    }
    default:
      return state;
  }
}

export default usersReducer;
