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
    this.redirect = this.redirect.bind(this);
  }


  showMenu(e) {
    e.preventDefault();
    this.setState({ showMenu: true}, () => {
      document.addEventListener('click', this.closeMenu);
    })
  }

  closeMenu(e){
    if (!this.dropdownMenu.contains(e.target)){
      this.setState({showMenu: false}, () => {
      document.removeEventListener('click', this.closeMenu);
      });
    } 
  }  
  
  redirect(){
    this.props.logout;
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="navbar">
        <img className='feed-logo' src={window.feedlogoURL} />
        <input type="search" className="search-bar" placeholder="Search for Kims"/>
          <button onClick={this.showMenu}>
           Menu
          </button>
      
      {this.state.showMenu? (

      <div className="menu" ref={(element) => {
        this.dropdownMenu = element;
      }}
      >
       
        <button className="menu-buttons" onClick={this.redirect}>Log out</button>
        
        <button className="menu-buttons">Edit Your Profile</button>
        
        <button className="menu-buttons">See Terms and Privacy</button>
        
      </div>
      ) 
      : (null)
      }
      
      <button>Home</button>
      <button>{this.props.name}</button>
      </div>
    );
  }

  
  
}


export default Navbar;