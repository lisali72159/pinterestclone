import React from 'react';


class FollowsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            followedUser: this.props.users[this.props.follow.followable_id],
            followedBoard: this.props.boards[this.props.follow.followable_id],
        }
        debugger
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
        
        return this.props.follow.followable_id;
    }
}

export default FollowsIndexItem;