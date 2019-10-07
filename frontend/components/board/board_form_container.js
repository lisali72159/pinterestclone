import { connect } from "react-redux";
import BoardForm from "./board_form";
import { createBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  // return { errors: state.errors.board, formType: "login" };
};

const mapDispatchToProps = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal())
  // clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
   null,
    mapDispatchToProps
  )(BoardForm)
);
