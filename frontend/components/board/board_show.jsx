import React from 'react';


class BoardShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.board.name,
      descrption: this.props.board.description,
    }
  }

  componentDidMount(){
    this.props.fetchBoard(this.props.match.params.id)
  }

  render(){
    <>

      
    <div className="profile-container">
      <div className="profile-buttons-container">
            <div className="sub-menu-container">
            <button className="profile-buttons" onClick={this.showMenu} onBlur={this.closeMenu} tabIndex="0"> 
              <img src={window.plusURL}></img>
            </button>
            {this.state.showMenu ? (
              
              <div className="sub-menu">
                
                <button className="sub-menu-buttons" onClick={this.props.createBoard}>Create Board</button>
                
                <button className="sub-menu-buttons" onClick={this.redirect_pin}>Create Pin</button>
             
              </div>
            )
            : (null)
          }
          </div>
            <div>
          <button onClick={this.redirect_edit} className="profile-buttons"> <img src={window.pencilURL}></img></button>
          <button className="profile-buttons"> <img src={window.uploadURL}></img></button>
          </div>
      </div>
    </div>
    <br/>
      
      <div className="board-info">
        <h2>{this.props.name}</h2>
        <h5>{this.props.description}</h5>
      </div>
    </>
  }
}