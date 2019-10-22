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
      return <div class="loader"></div>
    }
    return (
      <>
      <div className="pin-container">
        <img src={this.props.pin.photo_url}/>
          <div>
           <h4>{this.props.pin.title}</h4>
            <h4>{this.props.pin.link}</h4>
          </div>
      </div>
      </>
    )
  }
}

export default PinShow;