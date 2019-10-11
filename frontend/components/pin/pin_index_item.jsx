import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import EditPinFormContainer from '../pin/edit_pin_form_container';






class PinIndexItem extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      title: this.props.pin.title,
      
    }
  }

  // componentDidMount(){
  //   this.props.fetchPin();
  // }
  

  render() {
    const editPinModal = (
      <div className="modal-background" onClick={() => this.setState({ editPinShow: false })}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          < EditPinFormContainer pinId={this.props.pin.id} pin={this.props.pin}/>
        </div>
      </div>)
    // debugger
    const photo = this.props.pin.photo_url ? <img src={this.props.pin.photo_url} /> : "No photo";
    return (
      <>
      <div className="pin-photo">
          {this.state.editShow ? editPinModal : null}
           
          {photo}
          <button className="magic-button" onClick={() => this.setState({ editShow: true })}><img className='editform-logo' src={window.editURL} /></button>
          {/* <button className="magic-button" onClick={() => this.props.openModal('editPin',{id: this.props.pin.id})}><img className='editform-logo' src={window.editURL} /></button> */}
            {/* Add pin to a board, edit a pin  */}

          <h6 className="caption">{this.props.pin.title}</h6>
          <h6 className="caption">{this.props.pin.link}</h6>
      </div>
      </>
    )
  }
}

export default PinIndexItem;



