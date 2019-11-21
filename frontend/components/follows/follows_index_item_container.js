import { connect } from 'react-redux';
import FollowsIndexItem from '../follows/follows_index_item';
import { withRouter } from 'react-router-dom';
import { fetchAllFollows, createFollow, deleteFollow } from '../../actions/follow_actions';


const msp = state => {
    // const follows = Object.values(state.entities.follows);
    
    // let followed_users = follows.filter(follow => follow.followable_type === 'User');
    // let followed_user_id = followed_users.map(follow => follow.followable_id);
    
    // let followed_boards = follows.filter(follow => follow.followable_type === 'Board');
    // let followed_board_id = followed_boards.map(follow => follow.followable_id);


    // let followed_user;
    // let followed_board;
    // if (follow.followable_type === 'User') {
    //     followed_user = state.entities.users[follow.followable_id].first_name + state.entities.users[follow.followable_id].last_name;
    // } else {
    //     followed_board = state.entities.board[follow.followable_id].name;
    // }

    // debugger
    // return { followed_user, followed_board }
}

const mdp = dispatch => ({
    fetchAllFollows: () => dispatch(fetchAllFollows()),
    deleteFollow: followId => dispatch(deleteFollow(followId)),
    createFollow: follow => dispatch(createFollow(follow)),
})

export default withRouter(connect(null, mdp)(FollowsIndexItem));