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
        // 
        this.fetchAllUsers();
        this.props.fetchAllFollows();
        // this.props.fetchAllUsers();
    }

    fetchAllUsers(){
        debugger
        this.props.fetchAllUsers();
    }

    
    render(){
       return (
        <>
       <h1>You are currently following:</h1>
       <div className="follows-index">
           <div className="follows">
                <FollowsIndexItemContainer follow={Object.values(this.props.follows)} />
           </div>
       </div>
       </>
       )
    }
}

export default FollowsIndex;