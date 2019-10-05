import React from "react";

class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      location: "",
      age: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  // componentWillUnmount() {
  //   this.props.clearErrors();
  // }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.update(user).then(() => {
      this.props.history.push('/profile');
    });
  }

  renderErrors() {

    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
        <div className="edit-form">
          {/* <img className='form-logo' src={window.logoURL} /> */}
          <span className="error-msg">{this.renderErrors()}</span>
          

          <div className="edit-form-container">
            <form onSubmit={this.handleSubmit} >
              <h2>Edit Your Profile</h2>
              <h5>People on Pinterest will get to know you with the info below</h5>

              <div className="edit-inputs">
                <br />
                {/* First name */}
                <input
                  type="text"
                  value={this.state.first_name}
                  onChange={this.update("first_name")}
                  className="session-input"
                  placeholder="First Name"
                />

                <br />
                {/* Password */}
                <input
                  type="text"
                  value={this.state.last_name}
                  onChange={this.update("last_name")}
                  className="session-input"
                  placeholder="Last Name"
                />

                <br />
                {/* Age */}
                <input
                  type="text"
                  value={this.state.age}
                  onChange={this.update("age")}
                  className="session-input"
                  placeholder="Age"
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
