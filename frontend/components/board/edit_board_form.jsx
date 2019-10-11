import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.board.id,
      name: this.props.board.name,
      description: this.props.board.description,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const user = Object.assign({}, this.state);
    // this.props.editBoard(this.state).then(() => this.props.history.push('/profile'));
    
    this.props.editBoard(this.state).then(() => {
      // e.stopPropagation();
      this.props.closeModal();
      // this.props.history.push('/profile');
    });
  }

  delete(){
    this.props.deleteBoard(this.props.board.id).then(()=> {
      this.props.closeModal();
    })
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
            <form className="login-form-box">
              <h2 className="welcome">Edit your board</h2>

              <div className="edit-form">
                <br />
                {/* Name */}
                <label>Name</label>
                <br/>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                  className="board-input"
    
                />
                <br />
                {/* Description */}
                <label>Description</label>
                <br/>
                <input
                  type="text"
                  value={this.state.description}
                  onChange={this.update("description")}
                  className="board-input"

                />
                <input className="red-button" onClick={this.handleSubmit} type="submit" value="Save" />
                <br/>
                <button className="gray-button" onClick={this.props.closeModal}>Cancel</button>
               
                <button className = "gray button" onClick= {this.delete}>Delete</button>
                
                
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
