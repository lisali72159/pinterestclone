
import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pin_actions";


const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIN:
      return Object.assign({}, state, { [action.pin.id]: action.pin });
    case RECEIVE_PINS:
      // debugger
      return action.pins;
    case REMOVE_PIN:
      return null;
    default:
      return state;
  }
};

export default pinsReducer;
