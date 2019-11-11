import { connect } from "react-redux";
import EditPinForm from "./edit_pin_form";
import { editPin, deletePin, fetchPin} from "../../actions/pin_actions";
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  const pin = state.entities.pins[ownProps.id];
  // debugger
  return { pin };
};

const mapDispatchToProps = dispatch => ({
  editPin: pin => dispatch(editPin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  openModal: (type, props) => dispatch(openModal(type, props)),
  closeModal: () => dispatch(closeModal())
  // clearErrors: () => dispatch(clearErrors())
});


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPinForm)
);
