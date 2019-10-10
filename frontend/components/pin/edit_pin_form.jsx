import React from 'react';

class PinForm extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      title: this.props.pin.name,
      link: this.props.pin.link,
      description: this.props.pin.description,
    }
    // debugger
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.editPin(this.state).then(() => this.props.history.push('/profile'));
  }


  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }


  render() {
    return (
      <>
        <div className="edit-form">
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
          {/* <span className="error-msg">{this.renderErrors()}</span> */}

          <div className="edit-pin-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h2 className="welcome">Edit your pin</h2>

              <div className="edit-form">
                <br />
                {/* Title */}
                <label>Title</label>
                <br />
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  className="pin-input"

                />

                <br />
                {/* Link */}
                <label>Link</label>
                <br />
                <input
                  type="text"
                  value={this.state.link}
                  onChange={this.update("link")}
                  className="pin-input"

                />

                
                <br />
                {/* Description */}
                <label>Description</label>
                <br />
                <input
                  type="text"
                  value={this.state.description}
                  onChange={this.update("description")}
                  className="pin-input"

                />
                <input className="red-button" type="submit" value="Save" />
                <button className="gray-button">Cancel</button>
                <br />
                <button className="gray button">Delete</button>


                <br></br>

              </div>
            </form>


          </div>
        </div>
      </>
    );
  }
}

export default PinForm;
