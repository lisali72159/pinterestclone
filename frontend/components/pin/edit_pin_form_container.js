import { connect } from "react-redux";
import EditPinForm from "./edit_pin_form";
import { editPin } from "../../actions/pin_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  const pin = state.entities.pins[ownProps.pinId];
  return { pin };
};

const mapDispatchToProps = dispatch => ({
  editPin: pin => dispatch(editPin(pin))
  // closeModal: () => dispatch(closeModal())
  // clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditPinForm)
);
