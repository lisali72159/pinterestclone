import { RECEIVE_BOARDS, RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOARD:
      // debugger
      return Object.assign({}, state, {[action.board.id]: action.board});
    case RECEIVE_BOARDS:
      return action.boards;
    case REMOVE_BOARD:
      newState = merge({}, state);
      delete newState[action.boardId]
      return newState;
    default:
      return state;
  }
}

export default boardsReducer;