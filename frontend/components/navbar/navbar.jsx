import React from "react";

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
    this.props.history.push('/profile')
  }

  redirect_feed(){
    debugger
    this.props.history.push('/feed')
  }

  render() {
    return (
      <div className="navbar-container">
        <button className="nav-button"><img className='feed-logo' src={window.feedlogoURL} /></button>
        <input type="search" className="search-bar" placeholder="Search for Kims"/>

        <button className="nav-button" onClick={this.redirect_feed}>Home</button>
        <button className="nav-button">Following</button>
        <button className="nav-button" onClick={this.redirect_profile}>L</button>
        <div>
          <div className="nav-button" onClick={this.showMenu} onBlur={this.closeMenu} tabIndex = "0">
           Menu
       
          </div>
        {this.state.showMenu ? (

          <div className="menu">

            

            <button className="menu-buttons">Edit Your Profile</button>

            <button className="menu-buttons">See Terms and Privacy</button>

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