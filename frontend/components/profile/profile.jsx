import React from "react";
import NavbarContainer from '../navbar/navbar_container';
import BoardIndexContainer from '../board/board_index_container';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props){
    // debugger
    super(props);
    this.state = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      location: this.props.user.location,
      age: this.props.user.age,
    }
    this.redirect_edit = this.redirect_edit.bind(this);
  }

  redirect_edit(){
    debugger
    this.props.history.push('/edit')
  }
  
  render(){
    // debugger
    return (
      <>
      <NavbarContainer />
      
    <div className="profile-container">

          <div className="profile-buttons-container">
            <button className="profile-buttons"> <img src={window.plusURL}></img></button>
            <button onClick={this.redirect_edit} className="profile-buttons"> <img src={window.pencilURL}></img></button>
            <button className="profile-buttons"> <img src={window.uploadURL}></img></button>
          </div>
          <br/>
        <div className="user-info">
          <h2>{this.state.first_name} {this.state.last_name}</h2> 
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

export default withRouter(Profile);
//Button allows user to change user information. Redirects to an edit user page.