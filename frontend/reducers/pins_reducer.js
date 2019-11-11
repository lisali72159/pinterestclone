
import { RECEIVE_PINS, RECEIVE_PIN, REMOVE_PIN } from "../actions/pin_actions";
import { RECEIVE_BOARD } from '../actions/board_actions';


const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIN:
      return Object.assign({}, state, { [action.pin.id]: action.pin });
    case RECEIVE_PINS:
      return action.pins;
    case REMOVE_PIN:
      return null;
    case RECEIVE_BOARD:
      let newState = {};
      action.pins.forEach(pin => {
        newState[pin.id] = pin;
      })
      return newState;
    default:
      return state;
  }
};

export default pinsReducer;
