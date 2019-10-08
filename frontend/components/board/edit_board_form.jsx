import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.board.name,
      description: this.props.board.description,
    }
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
    // const user = Object.assign({}, this.state);
    this.props.editBoard(this.state).then(() => this.props.history.push('/profile'));
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

          <div className="edit-board-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h2 className="welcome">Edit your board</h2>

              <div className="edit-form">
                <br />
                {/* Name */}
                <label>Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                  className="board-input"
    
                />
                <br />
                {/* Description */}
                <label>Description</label>
                <input
                  type="text"
                  value={this.state.description}
                  onChange={this.update("description")}
                  className="board-input"

                />
                <input clasName = "gray button" type="submit" value="Delete"/>
                <input className="gray-button" type="submit" value="Cancel" onClick={this.closeModal}/>
                <input className="red-button" type="submit" value="Save" />
                <br></br>

              </div>
            </form>


          </div>
        </div>
      </>
    );
  }
}

export default BoardForm;
