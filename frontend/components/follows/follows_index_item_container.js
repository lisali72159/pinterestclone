import { connect } from 'react-redux';
import FollowsIndexItem from '../follows/follows_index_item';
import { withRouter } from 'react-router-dom';
import { fetchAllFollows, createFollow, deleteFollow } from '../../actions/follow_actions';


const msp = state => {
    const follows = Object.values(state.entities.follows);
    
    let followed_users = follows.filter(follow => follow.followable_type === 'User');
    let followed_user_ids = followed_users.map(follow => follow.followable_id);
    
    let followed_boards = follows.filter(follow => follow.followable_type === 'Board');
    let followed_board_ids = followed_boards.map(follow => follow.followable_id);
    debugger
    return { followed_user_ids, followed_board_ids }
}

const mdp = dispatch => ({
    fetchAllFollows: () => dispatch(fetchAllFollows()),
    deleteFollow: followId => dispatch(deleteFollow(followId)),
    createFollow: follow => dispatch(createFollow(follow)),
})

export default withRouter(connect(msp, mdp)(FollowsIndexItem));