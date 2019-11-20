import { connect } from 'react-redux';
import Followers from './followers';
import { fetchAllFollows, deleteFollow } from '../../actions/follow_actions';

const msp = (state, ownProps) => {
    const follows = state.entities.follows[ownProps.match.params.id];
    // debugger
    return { follows }
}

const mdp = dispatch => ({
    fetchAllFollows: () => dispatch(fetchAllFollows()),
    deleteFollow: followId => dispatch(deleteFollow(followId)),
    createFollow: follow => dispatch(createFollow(follow)),
})

export default connect(msp, mdp)(Followers);