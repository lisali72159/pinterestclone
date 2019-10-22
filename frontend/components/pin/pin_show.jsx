import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { withRouter } from 'react-router-dom';
import { fetchPin } from '../../actions/pin_actions';

class PinShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // title: this.props.pin.title,
      // pin: this.props.pin
    }
  }

  componentDidMount() {
    debugger
    this.props.fetchPin(this.props.match.params.id)
  }

  render(){
    debugger
    if (!this.props.pin) {
      return <div className="loader"></div>
    }
    return (
      <>
      <div className="pin-container">
        <div id='pin-image'><img src={this.props.pin.photo_url}/></div>
          <div id="pin-info">
           <h4>{this.props.pin.title}</h4>
            <a href= {`https://${this.props.pin.link}`} target="_blank">{this.props.pin.link}</a>
            <button><img className="board-logo" src={window.editURL} /></button>
          </div>
      </div>
      </>
    )
  }
}

export default PinShow;