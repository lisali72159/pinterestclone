import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      location: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(this.props.closeModal);
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Welcome to Kimterest!</h2>

          <h3>Find new ideas to try</h3>

          <div className="signup-form">
            <br />
            <label>
              First Name:
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update("first name")}
                className="firstname-input"
              />
            </label>
            <br />
            <label>
              Last Name:
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update("last name")}
                className="lastname-input"
              />
            </label>
            <br />
            <label>
              Location:
              <input
                type="text"
                value={this.state.loccation}
                onChange={this.update("location")}
                className="location-input"
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="email-input"
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="createpassword-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value="Sign up" />

            {/* <Link>Already a member? Log in</Link> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
