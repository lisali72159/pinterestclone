import { combineReducers } from "redux";
import usersReducers from "./users_reducer";
import boardsReducers from './boards_reducer';

const entitiesReducer = combineReducers({
  users: usersReducers,
  boards: boardsReducers
});

export default entitiesReducer;
