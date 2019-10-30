import * as PinApiUtil from "../util/pin_api_util";

export const RECEIVE_PIN = "RECEIVE_PIN";
export const RECEIVE_PINS = "RECEIVE_PINS";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

const receivePin = payload => {
  return {
  type: RECEIVE_PIN,
  pin: payload.pin,
  board: payload.board,
  author: payload.author,
  }
};

const receiveErrors = errors => {
  return {
    type: RECEIVE_PIN_ERRORS,
    errors
  };
};

const removePin = pinId => {
  return {
    type: REMOVE_PIN,
    pinId
  }
}

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchAllPins = () => dispatch =>
  PinApiUtil.fetchAllPins().then(pins => dispatch(receivePins(pins)));

export const createPin = pin => dispatch =>
  PinApiUtil.createPin(pin).then(pin => dispatch(receivePin(pin)));

export const fetchPin = (id) => dispatch =>
  PinApiUtil.fetchPin(id).then(payload => dispatch(receivePin(payload)));

export const editPin = pin => dispatch => {
  return (
    PinApiUtil.editPin(pin).then(pin => dispatch(receivePin(pin)))
  )
  }

export const deletePin = pinId => dispatch =>
  PinApiUtil.deletePin(pinId).then(pin => dispatch(removePin(pinId)));
