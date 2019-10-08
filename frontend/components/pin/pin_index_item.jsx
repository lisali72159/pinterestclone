import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";


class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.pin.title
    }
  }

  render() {
    // debugger
    return (
      <>
      <div>
        <li>{this.state.title}
        <br/>
            {/* <button onClick={() => this.setState({editShow: true})}>Edit</button> */}
            {/* Add pin to a board, edit a pin */}
        </li>
      </div>
      </>
    )
  }
}

export default PinIndexItem;



