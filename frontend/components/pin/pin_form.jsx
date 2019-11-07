import React from 'react';

class PinForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      board_id: null,
      title: "",
      description: "",
      link: "",
      photoFile: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirect_profile = this.redirect_profile.bind(this);
    this.getBoardNames = this.getBoardNames.bind(this);
  }

  update(field) {
    return e => {
      return this.setState({
        [field]: e.currentTarget.value
      });
    }
  }

  handleFile(e){
    this.setState({photoFile: e.currentTarget.files[0]})
  }

  redirect_profile() {
    this.props.history.push('/profile')
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[link]', this.state.link);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[id]', this.state.id);
    formData.append('pin[author_id]', this.state.author_id);
    formData.append('pin[board_id]', this.state.board_id);

    if (this.state.photoFile) {
      formData.append('pin[photo]', this.state.photoFile);
    }
    // debugger
    this.props.createPin(formData).then(() => {
      this.props.history.push('/feed');
    });
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('pin[name]', this.state.name);
  //   formData.append('pin[id]', this.state.id);
  //   formData.append('pin[link_url]', this.state.name);
  //   if (this.state.photoFile) {
  //     formData.append('pin[photo]', this.state.photoFile);
  //   }
  //   this.props.createPin(formData).then(() => this.props.history.push(`/users/${this.props.user.id}/pins`))
  //   //(alert("pin saved!"))
  // }

  getBoardNames(){
    const boards = Object.values(this.props.boards).map(board => {
      return <option value={board.id}>{board.name}</option>
    });
    return boards;
  }

  render() {
    return(
      <>
      <div className="pin-form">

        <div className="pin-form-container">
            <form className="pin-form-box">
              <div className="custom-select">
    
                <select onChange={this.update("board_id")}>
                  <option>Select board:</option>
                  {/* <option value={boards[i]}> {boards[i]}</option> */}
                  {this.getBoardNames()}
                </select>
              </div>

            <div className="pin-form">
              <div className="preview"><input type="file"
              onChange={this.handleFile.bind(this)}/>
                </div>
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
                placeholder="Tell everyone what your Kim is about"
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
                <input onClick={this.handleSubmit} className="red-button" type="submit" value="Save" />
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
