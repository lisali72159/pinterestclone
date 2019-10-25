import React from "react";
import NavbarContainer from '../navbar/navbar_container';
import BoardIndexContainer from '../board/board_index_container';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      location: this.props.user.location,
      age: this.props.user.age,
      description: this.props.user.description,
      showMenu: false,
    }
    this.redirect_edit = this.redirect_edit.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.redirect_pin = this.redirect_pin.bind(this);
  }
 

  showMenu(e) {
    e.persist();
    e.stopPropagation();
    if (e.target.className === 'profile-button' && this.state.showMenu) {
      return this.closeMenu(e);
    }
    this.setState({showMenu: true })
  }

  closeMenu(e) {
    if (!e.relatedTarget || e.currentTarget.className === 'profile-button') {
      return this.setState({ showMenu: false });
    }
  }  
  redirect_edit(){
    this.props.history.push('/edit')
  }
  
  redirect_pin(){
    this.props.history.push('/pin-builder')
  }

  render(){
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
        <br/>
        
        <div className="user-info">
          <h2>{this.state.first_name} {this.state.last_name}</h2> 
          <h5>{this.state.description}</h5>
          <h5>{this.state.location}</h5>
          <h5>0 followers • 0 following</h5>
        </div>
        
        <div className="pfp">
              <img src={window.defaultpfpURL}></img>
        </div>
        

        <BoardIndexContainer />
        
        
      </div>
    </>
  );
  }
}

export default Profile;
//Button allows user to change user information. Redirects to an edit user page.