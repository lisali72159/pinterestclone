import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import BoardIndex from "../board/board_index";
import { editBoard, deleteBoard } from "../../actions/board_actions";
import { openModal } from "../../actions/modal_actions";
import EditBoardFormContainer  from './edit_board_form_container';


const mapDispatchToProps = dispatch => {
  // debugger
  return {
  editBoard: () => dispatch(openModal("editBoard")),
  deleteBoard: boardId => dispatch(deleteBoard(boardId))
  // clearErrors: () => dispatch(clearErrors())
}};


class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.board.name,
      id: this.props.board.id,
      editShow: false,
    }
  }


  render() {
    // debugger
    const editModal = (
    <div className="modal-background" onClick={()=> this.setState({editShow: false})}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
         < EditBoardFormContainer boardId={this.props.board.id}/> 
      </div>
    </div> )
    return (
      <>
      <div className="board-container">
        {this.state.editShow ? editModal : null }
        
        {this.state.name}
        <br/>
        <br/>
          <button className='edit-button' onClick={() => this.setState({ editShow: true })}><img src={window.editURL} /></button>
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
