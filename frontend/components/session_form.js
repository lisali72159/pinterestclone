import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let errors = this.props.errors.map(error => {
      return <li>{error}</li>;
    });

    return (
      <>
        <div>
          <header>{this.props.formType}</header>
          {errors}
          <form onSubmit={this.handleSubmit}>
            <label>Email:</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
            <label>Password:</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          
            <input type="submit" value="submit" />
          </form>
        </div>
      </>
    );
  }
}

export default SessionForm;
