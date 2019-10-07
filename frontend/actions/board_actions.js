import * as BoardApiUtil from "../util/board_api_util";

export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

const receiveErrors = errors => {
  return {
    type: RECEIVE_BOARD_ERRORS,
    errors
  };
};

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchAllBoards = () => dispatch => 
  BoardApiUtil.fetchAllBoards().then(boards => dispatch(receiveBoards(boards)));

export const createBoard = board => dispatch => 
  BoardApiUtil.createBoard(board).then(board => dispatch(receiveBoard(board)));


  // export const fetchBoard = (board) => dispatch =>
//   BoardApiUtil.fetchBoard(board).then(board => dispatch(receiveBoard(board)));

  // export const editBoard = board => dispatch => 
  // BoardApiUtil.editBoard(board).then(board => dispatch(receiveBoard(board)));

// export const deleteBoard = boardId = dispatch => 
//   BoardApiUtil.deleteBoard(boardId).then(board => dispatch(removeBoard(boardId)));




