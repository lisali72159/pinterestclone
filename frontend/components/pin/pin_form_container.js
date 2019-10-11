import { connect } from "react-redux";
import PinForm from "./pin_form";
import { createPin } from "../../actions/pin_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  let boards = state.entities.boards;
  return { boards };
};

const mapDispatchToProps = dispatch => ({
  createPin: pin => dispatch(createPin(pin)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PinForm)
);
