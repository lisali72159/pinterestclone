import React from "react";
import Navbar from '../navbar/navbar';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      location: "",
      age: "",
      description: "",
    }
  }

  

  render(){
    return (
      <>
    <div className="profile-info">
      <Navbar />
      
      <div>
        {/* <h1>{this.props.first_name}</h1> {this.props.last_name}</h1>
       <h3>{this.props.location}</h3> */}
      </div>
      
      <h4>0 followers 0 following</h4>
      <button>Add Board/Pin</button>
      <button>Edit Profile</button>
      <button>Upload Pin</button>
      
    </div>
    </>
  );
  }
}

export default Profile;
//Button allows user to change user information. Redirects to an edit user page.