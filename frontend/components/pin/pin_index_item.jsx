import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditPinFormContainer from '../pin/edit_pin_form_container';


class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.pin.title,
      editShow: false,
    }
    // debugger
  }

  render() {
    const editPinModal = (
      <div className="modal-background" onClick={() => this.setState({ editPinShow: false })}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          < EditPinFormContainer pinId={this.props.pin.id} />
        </div>
      </div>)
    
    const photo = this.props.pin.photo_url ? <img src={this.props.pin.photo_url} /> : "No photo";
    // debugger
    return (
      <>
      <div className="pin-photo">
          {this.state.editShow ? editPinModal : null}
           <div className="magic-button">
            <button onClick={() => this.setState({editShow: true})}>Edit</button>
             {/* Add pin to a board, edit a pin  */}
          </div> 
          {photo}
          {this.props.pin.title}
          {this.props.pin.link}
      </div>
      </>
    )
  }
}

export default PinIndexItem;



