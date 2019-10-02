import React from "react";

class SignupForm extends React.Component {
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
        < button className="top-button" onClick={this.props.login}>Log in</button >
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h2>Welcome to Kimterest</h2>

          <h5>Find new ideas to try</h5>

          <div className="signup-form">
            {/* <br />
            
              <input
                type="text"
                value={this.state.first_name}
                onChange={this.update("first_name")}
                className="firstname-input"
                placeholder="First Name"
              />
            
            <br />
           
              <input
                type="text"
                value={this.state.last_name}
                onChange={this.update("last_name")}
                className="lastname-input"
                placeholder="Last Name"
              />
            
            <br />
            
             
              <input
                type="text"
                value={this.state.loccation}
                onChange={this.update("location")}
                className="location-input"
                placeholder="Location"
              />
             */}
            <br />

            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              className="email-input"
              placeholder="Email"
            />

            <br />

            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="createpassword-input"
              placeholder="Create A Password"
            />

            <br />

            <input
              type="text"
              value={this.state.age}
              onChange={this.update("age")}
              className="age-input"
              placeholder="Age"
            />

            <br />
            <input className="red-button" type="submit" value="Sign up" />
            <br></br>
          </div>
        </form>
        <button onClick={this.props.login}>Already a member? Log in</button>
        
      </div>
    );
  }
}


export default SignupForm;
