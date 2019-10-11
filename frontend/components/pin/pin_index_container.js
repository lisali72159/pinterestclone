import { connect } from "react-redux";
import PinIndex from "./pin_index";
import { fetchAllPins } from "../../actions/pin_actions";

const mapStateToProps = state => {
  let pins = state.entities.pins;

  return { pins };
};

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(fetchAllPins())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PinIndex);
