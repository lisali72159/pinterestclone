import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardIndex from "../board/board_index";
import { editBoard, deleteBoard } from "../../actions/board_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import EditBoardFormContainer  from './edit_board_form_container';

// const mapStateToProps = state => {
//   const boards = state.entities.boards
// }

const mapDispatchToProps = dispatch => {
  return {
  editBoard: () => dispatch(openModal("editBoard")),
  deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  openModal: (type, props) => dispatch(openModal(type, props)),
  
}};


class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.board.name,
      id: this.props.board.id,
    }
  }

 

  render() {
    
    let {name} = this.props.board
    return (
      <>
      <div className="board-container">
        
        
        <div className="title">{name}</div>
        <br/>
        <br/>
          <button className='edit-button' onClick={() => this.props.openModal('editBoard', {id: this.props.board.id})}><img className="board-logo" src={window.editURL} /></button>
        </div>
      </>
    )
  }
}

// export default BoardIndexItem;

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(BoardIndexItem)
);




// onClick={this.props.editBoard(this.props.board)}
