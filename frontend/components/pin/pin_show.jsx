import React from 'react';
import { withRouter } from 'react-router-dom';


class PinShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board_id: null
    }
    this.redirect_feed = this.redirect_feed.bind(this);
    this.redirect_link = this.redirect_link.bind(this);
    // this.handleAddToBoard = this.handleAddToBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.fetchPin(this.props.match.params.id)
    this.props.fetchAllBoards();
  }


  redirect_feed() {
    // debugger
    this.props.history.goBack();
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

  redirect_link(){
    if (this.props.pin.link){
      return <div className="redirect"><img src={window.redirectURL}></img><a href={`https://${this.props.pin.link}`} target="_blank">{this.props.pin.link}</a></div>
    }
  }

  // handleAddToBoard(){
  //   debugger
  //   let pin = Object.assign({}, this.props.pin);
  //   pin.board_id = parseInt(this.state.board_id);
  //   delete pin["photo_url"];
  //   delete pin["id"];
  //   this.props.createPin({ pin });
  // }


  handleSubmit(e) {
    let { title, link, description, author_id, board_id, photo } = this.props.pin
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', title)
    formData.append('pin[link]', link)
    formData.append('pin[description]', description)
    // formData.append('pin[id]', id);
    formData.append('pin[author_id]', author_id)
    formData.append('pin[board_id]', board_id)
    formData.append('pin[photo]', photo);
    
    // debugger
  //   this.props.createPin(formData);
  }
  
  render(){
    // debugger
    if (!this.props.pin || !this.props.board) {
      return <div className="loader"></div>
    }
    return (
      <>
      <button id="back" onClick={this.redirect_feed}> <img src={window.backURL}></img></button>
      <div className="pin-container">
          <div id='pin-image'><img src={this.props.pin.photo_url} /></div>
          <button className="red-button" id="edit" onClick={() => this.props.openModal('editPin', { id: this.props.pin.id })}>Edit</button>
          <div id="pin-info">
           <h3>{this.props.pin.title}</h3>
           <h4>This pin is saved to: {this.props.board.name}</h4>
           <h4>Uploaded by {this.props.author.first_name} {this.props.author.last_name} </h4>
            {this.redirect_link()}
            <div className="custom-select">
              <select onChange={this.update("board_id")}>
                <option>Choose a Board</option>
                {this.getBoardNames()}

              </select>
              <input onClick={this.handleSubmit} type="submit" value="Save" />
            </div>

          </div>
      </div>
      </>
    )
  }
}

export default PinShow;