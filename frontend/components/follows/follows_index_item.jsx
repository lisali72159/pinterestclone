import React from 'react';


class FollowsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.follow = this.follow.bind(this);
        // this.unfollow = this.unfollow.bind(this);
        // this.redirect_profile = this.redirect_profile.bind(this);
        // this.redirect_board = this.redirect_board.bind(this);
    } 
 
    // follow(){
    //     let follow = {}
    //     this.props.createFollow(follow);
    // }
    
    // unfollow(){
    //     let follow = {}
    //     this.props.deleteFollow();
    // }

    // redirect_profile() {
    //     this.props.history.push(`/profile/${id}`)
    // }

    // redirect_board() {
    //     this.props.history.push()
    // }

    render(){
        let followed_user;
        let followed_board;
        if (this.props.follow.followable_type === 'User') {
            followed_user = this.state.entities.users[this.props.follow.followable_id];
        } else {
            followed_board = this.state.entities.boards[this.props.follow.followable_id];
        }
        
        return followed_user ? followed_user : followed_board
    }
}

export default FollowsIndexItem;