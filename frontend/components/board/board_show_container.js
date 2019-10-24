import { connect } from 'react-redux';
import BoardShow from './board_show';
import { fetchBoard } from '../../actions/board_actions';

const msp = (state, ownProps) => {
  // debugger
  const board = state.entities.boards[ownProps.match.params.id];
  // debugger
  return { board }
}

const mdp = dispatch => ({
  fetchBoard: id => dispatch(fetchBoard(id))
})

export default connect(msp, mdp)(BoardShow);
