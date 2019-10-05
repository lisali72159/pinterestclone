import React from "react";
import SignupFormContainer from "../session/signup_form_container";
import Modal from "../modal/modal";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.signup();
  }

  render() {
    return <div className="splash"><img src={window.splashURL}></img></div>;
  }
}
export default Splash;

