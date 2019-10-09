import React from 'react';

class PinForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: "",
      link: "",
      photoFile: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirect_profile = this.redirect_profile.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleFile(e){
    // debugger
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  redirect_profile() {
    // debugger
    this.props.history.push('/profile')
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[photo]', this.state.photoFile);
    $.ajax({
      url: '/api/posts',
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    }).then((response) => console.log(response.message),
    (response) => console.log(response.responseJSON));
  
    const pin = Object.assign({}, this.state);
    this.props.createPin(pin).then(() => {
      this.props.history.push('/profile');
    });
  }

  render() {
    return(
      <>
      <div className="pin-form">

        <div className="pin-form-container">
          <form onSubmit={this.handleSubmit} className="pin-form-box">

            <div className="board-form">
              <input type="file"
              onChange={this.handleFile.bind(this)}/>

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
    )
  }
}

export default PinForm;
