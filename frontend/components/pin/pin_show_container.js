import { connect } from 'react-redux';
import PinShow from './pin_show';
import { fetchPin, editPin } from '../../actions/pin_actions';
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  debugger
  const pin = state.entities.pins[ownProps.match.params.id];
  return { pin }
}

const mdp = dispatch => ({
  fetchPin: id => dispatch(fetchPin(id)),
  editPin: pin => dispatch(editPin(pin))
})

export default (connect(msp, mdp)(PinShow))