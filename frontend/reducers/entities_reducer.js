import { combineReducers } from "redux";
import usersReducers from "./users_reducer";
import boardsReducers from './boards_reducer';
import pinsReducers from './pins_reducer';
import followsReducers from './follows_reducer';

const entitiesReducer = combineReducers({
  users: usersReducers,
  boards: boardsReducers,
  pins: pinsReducers,
  follows: followsReducers,
});

export default entitiesReducer;
