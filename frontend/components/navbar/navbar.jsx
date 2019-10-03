import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    };
  }

  handleClickOutside(){
    this.setState({listOpen: false})
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  
  
  render() {
    return (
      <div className="dd-wrapper">
        <div className="dd-header">
          <div className="dd-header-title"></div>
        </div>

        <ul className="dd-list">
          <li className="dd-list-item"></li>
          <li className="dd-list-item"></li>
          <li className="dd-list-item"></li>
        </ul>
      </div>
    );
  }
}
