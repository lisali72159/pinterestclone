import React from 'react';

class PinForm extends React.Component {
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

  redirect_profile() {
    // debugger
    this.props.history.push('/profile')
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const pin = Object.assign({}, this.state);
    this.props.createPin(pin).then(() => {
      this.props.history.push('/profile');
    });
  }

  render() {
    return (
      <>
      <div className="pin-form">

        <div className="pin-form-container">
          <form onSubmit={this.handleSubmit} className="pin-form-box">

            <div className="board-form">
              <br />
              {/* Title */}
              
              <br/>
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                className="pin-input"
                placeholder='Add your title'
              />

              <br/>
              {/* Description */}
         
              <input
                type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="pin-input"
                placeholder="Tell everyone what you Pin is about"
              />
              <br/>
                {/* Link */}

                <input
                  type="text"
                  value={this.state.link}
                  onChange={this.update("link")}
                  className="pin-input"
                  placeholder="Add a destination link"
                />
                <br />
              <input onClick={this.redirect_profile} className="red-button" type="submit" value="Save" />
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
