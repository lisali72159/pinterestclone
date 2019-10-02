import React from "react";

class Profile extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    <div className="profile-info">
      <button>Edit your info</button>
    <h1>{this.props.firstname} {this.props.lastname}</h1>
    <h3>{this.props.location}</h3>
    <h4>0 followers 0 following</h4>
    </div>
  }
}

//Button allows user to change user information. Redirects to an edit user page.