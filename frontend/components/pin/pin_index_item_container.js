
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PinIndexItem from "../board/board_index";
import { editPin, deletePin } from "../../actions/board_actions";



const mapDispatchToProps = dispatch => {
  // debugger
  return {
  editPin: () => dispatch(editPin()),
  deletePin: pinId => dispatch(deletePin(pinId))
}};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(PinIndexItem));


