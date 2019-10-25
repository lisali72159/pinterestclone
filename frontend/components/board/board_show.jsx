import React from 'react';
import PinIndexItemContainer from '../pin/pin_index_item_container';


class BoardShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
  }

  componentDidMount(){
    debugger
    this.props.fetchBoard(this.props.match.params.id);
    this.redirect_edit = this.redirect_edit.bind(this);
    this.redirect_pin = this.redirect_pin.bind(this);
  }


  showMenu(e) {
    e.persist();
    e.stopPropagation();
    if (e.target.className === 'profile-button' && this.state.showMenu) {
      return this.closeMenu(e);
    }
    this.setState({ showMenu: true })
  }

  closeMenu(e) {
    if (!e.relatedTarget || e.currentTarget.className === 'profile-button') {
      return this.setState({ showMenu: false });
    }
  }  

  redirect_edit() {
    this.props.history.push('/edit')
  }

  redirect_pin() {
    this.props.history.push('/pin-builder')
  }

  render(){
    debugger
    if (!this.props.board || !this.props.board.pins) {
      debugger
      return <div className="loader"></div>
    }

    // debugger
    const boardPins = Object.values(this.props.board.pins).map(pin => {
      return <PinIndexItemContainer key={pin.id} pin={pin} pinId={pin.id} />
    });

    return (
    <>
    <div className="profile-container">
      <div className="profile-buttons-container">
            <div className="sub-menu-container">
            <button className="profile-buttons" onClick={this.showMenu} onBlur={this.closeMenu} tabIndex="0"> 
              <img src={window.plusURL}></img>
            </button>
            {this.state.showMenu ? (
              
              <div className="sub-menu">
                <button className="sub-menu-buttons" onClick={this.redirect_pin}>Create Pin</button>
              </div>
            )
            : (null)
          }
          </div>
            <div>
              <button className="profile-buttons" onClick={() => this.props.openModal('editBoard', { id: this.props.board.id })}><img src={window.pencilURL} /></button>
          <button className="profile-buttons"> <img src={window.uploadURL}></img></button>
          </div>
      </div>
    </div>
    <br/>
      
      <div className="board-info">
        <h2>{this.props.board.name}</h2>
        <h5>{this.props.board.description}</h5>
      </div>

        <div className="boards-container">
          <ul>
            { boardPins }
          </ul>
        </div>
    </>
    )
  }
}

export default BoardShow;