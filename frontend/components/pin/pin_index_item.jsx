import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditPinFormContainer from '../pin/edit_pin_form_container';

class PinIndexItem extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    // debugger
    this.state = {
      title: this.props.pin.title,
      id: this.props.pin.id
    }
    this.redirect = this.redirect.bind(this);
  }


  redirect(){
    const pin = this.props.pin;
    // debugger
    this.props.history.push(`/pins/${pin.id}`)
  }
  
  render() {
    // debugger
    const photo = this.props.pin.photo_url ? <img src={this.props.pin.photo_url} onClick={this.redirect} /> : "No photo";
    // debugger
    return (
      <>
      <div className="pin-photo">
          {photo} 
          <button className="magic-button" onClick={() => this.props.openModal('editPin', {id: this.props.pin.id})}><img className='editform-logo' src={window.editURL} /></button>
            
            {/* Add pin to a board, edit a pin  */}

          <h6 className="caption">{this.props.pin.title}</h6>
        
      </div>
      </>
    )
  }
}

export default PinIndexItem;



