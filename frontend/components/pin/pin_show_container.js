import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin, editPin } from '../../actions/pin_actions';
import { withRouter } from "react-router-dom";
import { openModal } from '../../actions/modal_actions'

const msp = (state, ownProps) => {
  const pin = state.entities.pins[ownProps.match.params.id];
  // debugger
  // const boards = state.entities.boards;
  // return { boards}
  // also need board the pin belongs to
  return { pin }
}

const mdp = dispatch => ({
  openModal: (type, props) => dispatch(openModal(type, props)),
  fetchPin: id => dispatch(fetchPin(id)),
  editPin: pin => dispatch(editPin(pin))
})

export default (connect(msp, mdp)(PinShow))