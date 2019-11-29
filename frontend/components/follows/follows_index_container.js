import { connect } from 'react-redux';
import FollowsIndex from './follows_index';
import { fetchAllFollows } from '../../actions/follow_actions';
import { fetchAllUsers } from '../../actions/user_actions';

const msp = (state) => {
    const follows = state.entities.follows;
    // let followed_users = []
    // for (follow in Object.values(follows)) {
    //     if (follow.followable_type === 'User') {
    //         followed_users.push(follow)
    //     }
    // }

    // debugger
    return { follows }

}

const mdp = dispatch => ({
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchAllFollows: () => dispatch(fetchAllFollows()),
})

export default connect(msp, mdp)(FollowsIndex);