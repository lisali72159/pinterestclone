import { connect } from 'react-redux';
import Followers from './followers';
import { fetchAllFollows } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
    const follows = state.entities.follows;
    return { follows }
}

const mdp = dispatch => ({
    fetchAllFollows: () => dispatch(fetchAllFollows())
})

export default connect(msp, mdp)(Followers);