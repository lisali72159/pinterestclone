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
    this.props.signup(user).then(() => {
      this.props.closeModal();
      this.props.history.push('/feed');
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
      <div className="form">
        <img className='form-logo' src={window.logoURL} />
          <span className="error-msg">{this.renderErrors()}</span>
        <button className="float-button" onClick={this.props.login}>
          Log in
        </button>

        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <h2 className="welcome">Welcome to Kimterest</h2>
            <h5>Find new ideas to try</h5>

            <div className="signup-form">
              <br />
              {/* Email */}
              <input
                type="email"
                value={this.state.email}
                onChange={this.update("email")}
                className="session-input"
                placeholder="Email"
              />

              <br />
              {/* Password */}
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-input"
                placeholder="Create A Password"
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
              
              <input className="red-button" type="submit" value="Sign up" />
              <br></br>
                
            </div>
          </form>
          
          <button className="link" onClick={this.props.login}>
            <span>Already a member? Log in</span>
          </button>
        
        </div>
        </div>
      </>
    );
  }
}

export default SignupForm;
