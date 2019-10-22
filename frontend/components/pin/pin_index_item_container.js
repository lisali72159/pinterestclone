
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PinIndexItem from "../pin/pin_index_item";
import { editPin, deletePin } from "../../actions/pin_actions";
import { openModal } from '../../actions/modal_actions';


const mapDispatchToProps = dispatch => {
  return {
    editPin: () => dispatch(editPin()),
    deletePin: pinId => dispatch(deletePin(pinId)),
    openModal: (type, props) => dispatch(openModal(type, props))
  };};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(PinIndexItem));


