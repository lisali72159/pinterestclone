import React from 'react';
import FollowsIndexItemContainer from './follows_index_item_container';

class FollowsIndex extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetchAllFollows();
    }
    
    render(){
        const followsIndexItems = Object.values(this.props.follows).map(follow => {
            return <FollowsIndexItemContainer key={follow.id} follow={follow} followId={follow.id} />
        })
       return (
        <>
       <h1>Followers:</h1>
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