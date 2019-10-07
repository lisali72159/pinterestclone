import React from "react";
import NavbarContainer from '../navbar/navbar_container';

class ProfileForm extends React.Component {
  constructor(props) {
    
    super(props);
    this.state = {  
      id: this.props.user.id,
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      location: this.props.user.location,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // componentDidMount(){
    
  //   const { user } = this.props.user;
  //   this.setState({ user });
  // }

  // componentWillUnmount() {
  //   debugger
  //   this.props.clearErrors();
  // }

  update(field) {
    // debugger
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    this.props.edit(this.props.user).then(this.props.history.push('/profile'));
  }
  

  // renderErrors() {
  //   // debugger
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  componentDidMount() {
    // debugger
    this.props.edit(this.state)
  }

  render() {
    return (
      <>
      <NavbarContainer/>
        <div className="edit-form">
          
          {/* <span className="error-msg">{this.renderErrors()}</span> */}
          

          <div className="edit-form-container">
            <form onSubmit={this.handleSubmit} >
              <h2>Edit Your Profile</h2>
              <h5>People on Pinterest will get to know you with the info below</h5>

              <div className="edit-inputs">
                <br />
                {/* First name */}
                <label>  First name</label>
                <br/>
                <input
                  type="text"
                  // value={this.state.user.first_name}
                  onChange={this.update("first_name")}
                  className="session-input"
                  value={this.state.first_name}
                />

                
                {/* LastName */}
                {/* <label>Last name</label> */}
                <input
                  type="text"
                  // value={this.state.user.last_name}
                  onChange={this.update("last_name")}
                  className="session-input"
                  value={this.state.last_name}
                />

                

                <br />
                {/* Description */}
                <label>Description</label>
                <br/>
                <div className="textarea"><textarea 
                  // value={this.state.user.description}
                  onChange={this.update("description")}
                  className="session-input"
                  placeholder="Write a little bit about yourself here"

                ></textarea>
                </div>
                <br />
                {/* Location */}
                <label>Location</label>
                <br/>
                <input
                  type="text"
                  // value={this.state.user.location}
                  onChange={this.update("location")}
                  className="session-input"
                  placeholder="Ex. San Franciso, CA"
                  value={this.state.location}
                />

                <br />
                

                <input className="red-button" type="submit" value="Done" />
                <br></br>

              </div>
            </form>

           

          </div>
        </div>
      </>
    );
  }
}

export default ProfileForm;
