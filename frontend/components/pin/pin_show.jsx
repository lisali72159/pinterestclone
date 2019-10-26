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

  update(field) {
    return e => {
      return this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  getBoardNames() {
    const boards = Object.values(this.props.boards).map(board => {
      return <option value={board.id}>{board.name}</option>
    });
    return boards;
  }

  render(){
    // debugger
    if (!this.props.pin) {
      return <div className="loader"></div>
    }
    return (
      <>
      <button id="back" onClick={this.redirect_feed}> <img src={window.backURL}></img></button>
      <div className="pin-container">
          <div id='pin-image'><img src={this.props.pin.photo_url} /><button className="red-button" id="edit" onClick={() => this.props.openModal('editPin', { id: this.props.pin.id })}>Edit</button></div>
          <div id="pin-info">
           <h3>{this.props.pin.title}</h3>
           <h4>This pin is saved to: {this.props.pin.board_id}</h4>
           <h4>Uploaded by {this.props.pin.author_id}</h4>

            <div className="redirect"><img src={window.redirectURL}></img><a href={`https://${this.props.pin.link}`} target="_blank">{this.props.pin.link}</a></div>
            <div className="custom-select">

              <select onChange={this.update("board_id")}>
                <option>Save</option>
                {/* <option value={boards[i]}> {boards[i]}</option> */}
                {/* {this.getBoardNames()} */}
              </select>
            </div>

          </div>
      </div>
      </>
    )
  }
}

export default PinShow;