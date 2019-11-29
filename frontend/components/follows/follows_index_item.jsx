import React from 'react';


class FollowsIndexItem extends React.Component {
    constructor(props) {
        super(props);
     
        // debugger
        this.follow = this.follow.bind(this);
        this.unfollow = this.unfollow.bind(this);
        this.redirect_profile = this.redirect_profile.bind(this);
        this.redirect_board = this.redirect_board.bind(this);
        this.renderUser = this.renderUser.bind(this);
        this.renderBoard = this.renderBoard.bind(this);
    } 
 
    follow(){
        let follow = {}
        this.props.createFollow(follow);
    }
    
    unfollow(follow){
        // debugger
        this.props.deleteFollow(follow.id);
    }

    redirect_profile(profileId) {
        // debugger
        this.props.history.push(`/profile/${profileId}`)
    }

    redirect_board(id) {
        this.props.history.push(`/boards/${id}`)
    }

    renderBoard(follow) {
        let boardId = follow.followable_id;
        return (
        <div>
        <div className='board'><img src={window.bgURL}></img></div>
        <button className="board-name" onClick={() => this.redirect_board(boardId)}>{follow.follower.name}</button>
        <button className="unfollow-button"onClick={() => this.unfollow(follow)}>Unfollow</button>
        </div>
        )
    }

    renderUser(follow) {
        let fullName = `${follow.follower.first_name} ${follow.follower.last_name}`;
        let profileId = follow.followable_id;
    
        return (
        <div>
        <div className='profile-pic'><img src={window.defaultpfpURL}></img></div>
        <button className="profile-name" onClick={ () => this.redirect_profile(profileId)}>{fullName}</button>
        <br/>
        <button className="unfollow-button" onClick={ () => this.unfollow(follow)}>Unfollow</button>
        </div>
        )
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
                <div className='follow-type'>Users</div>
                <ul>
                    {userInfo}
                </ul>
                
            </div>
            <div>
                <div className='follow-type'>Boards</div>
                <ul>
                    {boardInfo}
                </ul>
            </div>
            </>

        )
    }
}

export default FollowsIndexItem;