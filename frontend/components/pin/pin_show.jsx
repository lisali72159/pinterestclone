import React from 'react';
import { withRouter } from 'react-router-dom';


class PinShow extends React.Component {
  constructor(props){
    super(props);
    this.redirect_feed = this.redirect_feed.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchPin(this.props.match.params.id)
  }


  redirect_feed() {
    this.props.history.push('/feed')
  }

  render(){
    // debugger
    if (!this.props.pin) {
      return <div className="loader"></div>
    }
    return (
      <>
      <div className="pin-container">
        <button id="back" onClick={this.redirect_feed}> <img src={window.backURL}></img></button>
        <div id='pin-image'><img src={this.props.pin.photo_url}/></div>
          <div id="pin-info">
           <h4>{this.props.pin.title}</h4>
           <h4>Board: {this.props.board}</h4>
            <a href= {`https://${this.props.pin.link}`} target="_blank">{this.props.pin.link}</a>
            <button onClick={() => this.props.openModal('editPin', { id: this.props.pin.id })}><img className='board-logo' src={window.editURL} /></button>
          </div>
      </div>
      </>
    )
  }
}

export default PinShow;