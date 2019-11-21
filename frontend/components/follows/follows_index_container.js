import { connect } from 'react-redux';
import FollowsIndex from './follows_index';
import { fetchAllFollows } from '../../actions/follow_actions';

const msp = (state) => {
    const follows = state.entities.follows;

    debugger
    return { follows}

}

const mdp = dispatch => ({
    fetchAllFollows: () => dispatch(fetchAllFollows()),
})

export default connect(msp, mdp)(FollowsIndex);