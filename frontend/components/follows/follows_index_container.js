import { connect } from 'react-redux';
import FollowsIndex from './follows_index';
import { fetchAllFollows, deleteFollow } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
    const follows = state.entities.follows;
    return { follows }
}

const mdp = dispatch => ({
    fetchAllFollows: () => dispatch(fetchAllFollows()),
})

export default connect(msp, mdp)(FollowsIndex);