import React from 'react';


class FollowsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    } 
 
   
    render(){
        debugger
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