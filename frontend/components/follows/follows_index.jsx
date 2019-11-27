import React from 'react';
import FollowsIndexItemContainer from './follows_index_item_container';

class FollowsIndex extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.fetchAllUsers = this.fetchAllUsers.bind(this);
    }

    componentDidMount(){
        debugger
        this.fetchAllUsers();
        this.props.fetchAllFollows();
    }

    fetchAllUsers(){
        debugger
        this.props.fetchAllUsers();
    }

    
    render(){
       return (
        <>
        <div className='following-container'>
        <div><h1>You are currently following:</h1></div>
            <div className="follows-index">
                <div className="follows">
                    <FollowsIndexItemContainer follow={Object.values(this.props.follows)} />
                </div>
            </div>
        </div>
       </>
       )
    }
}

export default FollowsIndex;