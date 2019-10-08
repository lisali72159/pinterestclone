import React from 'react';

class BoardForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      link: "",
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
    const board = Object.assign({}, this.state);
    this.props.createBoard(board).then(() => {
      this.props.closeModal();
      this.props.history.push('/profile');
    });
  }

  render() {
    return (
      <>
      <div className="pin-form">

        <div className="pin-form-container">
          <form onSubmit={this.handleSubmit} className="pin-form-box">
            <h2 className="welcome">Create board</h2>

            <div className="board-form">
              <br />
              {/* Title */}
              
              <br/>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="pin-input"
                placeholder='Add your titles'
              />

              <br/>
              {/* Description */}
         
              <input
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="board-input"
                placeholder="Tell everyone what you Pin is about"
              />
              <br/>
              <input onClick={} className="red-button" type="submit" value="Create" />
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
