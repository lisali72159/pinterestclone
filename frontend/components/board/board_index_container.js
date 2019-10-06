import { connect } from "react-redux";
import Board from "./board_index";
import { fetchAllBoards } from '../../actions/board_actions';

const mapStateToProps = state => {
  let id = state.session.currentUser;
  let name = state.entities.users[id].first_name[0];
  return { name };
};

const mapDispatchToProps = dispatch => ({
 fetchAllBoards: () => dispatch(fetchAllBoards()),
//  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Board)