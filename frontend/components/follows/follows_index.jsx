import React from 'react';
import FollowsIndexItemContainer from './follows_index_item_container';

class FollowsIndex extends React.Component {
    constructor(props) {
        debugger
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllFollows();
    }
    
    render(){
        const followsIndexItems = Object.values(this.props.follows).map(follow => {
            return <FollowsIndexItemContainer key={follow.id} follow={follow} users={this.state.users} boards={this.state.boards}/>
        })
       return (
        <>
       <h1>You are currently following:</h1>
       <div className="follows-index">
           <div className="follows">
               {followsIndexItems}
           </div>
       </div>
       </>
       )
    }
}

export default FollowsIndex;