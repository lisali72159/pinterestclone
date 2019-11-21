import React from 'react';


class FollowsIndexItem extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     followedUser: this.props.users[this.props.follow.followable_id],
        //     followedBoard: this.props.boards[this.props.follow.followable_id],
        // }
        debugger
        // this.follow = this.follow.bind(this);
        // this.unfollow = this.unfollow.bind(this);
        // this.redirect_profile = this.redirect_profile.bind(this);
        // this.redirect_board = this.redirect_board.bind(this);
        this.renderUser = this.renderUser.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
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

    renderBoard(follow) {
        return <li>{follow.follower.name}</li>
    }

    renderUser(follow) {
        let fullName = `${follow.follower.first_name} ${follow.follower.last_name}`
        return <li>{fullName}</li>
    }

    render(){
        let userInfo = [];
        let boardInfo = [];
        this.props.follow.map(follow => {
            if (follow.followable_type === 'Board') {
                boardInfo.push(this.renderBoard(follow));
            } else {
                userInfo.push(this.renderUser(follow));
            }
        })
        
        return (
        
            <>
            <div>
                <div>User:</div>
                <ul>
                    {userInfo}
                </ul>
            </div>
            <div>
                <div>Board:</div>
                <ul>
                    {boardInfo}
                </ul>
            </div>
            </>

        )
    }
}

export default FollowsIndexItem;