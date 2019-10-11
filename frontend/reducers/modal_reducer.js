import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions"

const nullState = {type: null, props: {}}

export default function modalReducer(state = nullState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {type: action.modal, props: action.props};
    case CLOSE_MODAL:
      return nullState;
    default:
      return state;
  }
}
