import { RECEIVE_FOLLOWS, RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const followsReducers = (state = {}, action) => {
   Object.freeze(state);
   let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOW:
            return Object.assign({}, state, {[action.follow.id]: action.follow})
        case REMOVE_FOLLOW:
            newState = merge({}, state);
            delete newState[action.follow.id];
            return newState;
        default:
            return state;
    }
}

export default followsReducers;

