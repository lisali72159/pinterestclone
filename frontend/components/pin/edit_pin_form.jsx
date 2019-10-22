import React from 'react';

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.pin.id,
      title: this.props.pin.title,
      link: this.props.pin.link,
      description: this.props.pin.description,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    
  }


  update(field) {
    // debugger
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.editPin(this.state).then(() => {
      // debugger
      this.props.closeModal();
   
    });
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
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {/* <span className="error-msg">{this.renderErrors()}</span> */}

          <div className="edit-pin-container">
            <form className="login-form-box">
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
                <input className="red-button" type="submit" onClick={this.handleSubmit} value="Save" />
                <br/>
                <button className="gray-button" onClick={() => this.props.deletePin(this.props.pin.id)}>Delete</button>


                <button className="gray-button" onClick={this.props.closeModal}>Cancel</button>

              </div>
            </form>
                


          </div>
        </div>
      </>
    );
  }
}

export default EditPinForm;
