import React from "react";
import { Route, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    // debugger
    super(props);
    this.state = {
      showMenu: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.redirect_signup = this.redirect_signup.bind(this);
    this.redirect_profile = this.redirect_profile.bind(this);
    this.redirect_feed = this.redirect_feed.bind(this);
    this.redirect_edit = this.redirect_edit.bind(this);
  }


  showMenu(e) {
    // e.preventDefault();
    e.persist();
    e.stopPropagation();
    if (e.target.className === 'nav-button' && this.state.showMenu){
      return this.closeMenu(e);
    } 
    this.setState({ showMenu: true })    
  }

  closeMenu(e){
      if (!e.relatedTarget){
        this.setState({showMenu: false});

      }
  }  
  
  redirect_signup(){
    // debugger
    this.props.logout();
    this.props.history.push('/');
  }

  redirect_profile(){
    // debugger
    this.props.history.push('/profile')
  }

  redirect_edit() {
    // debugger
    this.props.history.push('/edit')
  }

  redirect_feed(){
    // debugger
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="navbar-container">
        <button className="nav-button" onClick={this.redirect_feed}><img className='feed-logo' src={window.feedlogoURL} /></button>
        <input type="search" className="search-bar" placeholder="Search for Kims"/>

        <button className="nav-button" onClick={this.redirect_feed}>Home</button>
       
        <button className="nav-button">Following</button>
       
        <button className="nav-button" onClick={this.redirect_profile}>L</button>
        <div>
          <button className="nav-button" onClick={this.showMenu} onBlur={this.closeMenu} tabIndex = "0">
            <img src={window.menuURL}></img>
       
          </button>
        {this.state.showMenu ? (

          <div className="menu">

            

            <button className="menu-buttons" onClick={this.redirect_edit}>Edit Your Profile</button>    
                <br/>
              <button className="menu-buttons" onClick={this.redirect_signup}>Log out</button>

          </div>
        )
          : (null)
        }
      </div>
      </div>
    );
  }

  
  
}


export default Navbar;