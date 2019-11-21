import { connect } from 'react-redux';
import FollowsIndexItem from '../follows/follows_index_item';
import { withRouter } from 'react-router-dom';
import { fetchAllFollows, createFollow, deleteFollow } from '../../actions/follow_actions';


const mdp = dispatch => ({
    fetchAllFollows: () => dispatch(fetchAllFollows()),
    deleteFollow: followId => dispatch(deleteFollow(followId)),
    createFollow: follow => dispatch(createFollow(follow)),
})

export default withRouter(connect(null, mdp)(FollowsIndexItem));