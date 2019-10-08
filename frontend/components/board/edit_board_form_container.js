import { connect } from "react-redux";
import EditBoardForm from "./edit_board_form";
import { editBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";


const mapStateToProps = (state, ownProps) => {
   const board = state.entities.boards[ownProps.boardId];
   return { board }
};

const mapDispatchToProps = dispatch => ({
  editBoard: board => dispatch(editBoard(board)),
  // closeModal: () => dispatch(closeModal())
  // clearErrors: () => dispatch(clearErrors())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditBoardForm)
);


