import React from 'react';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBoards();
  }


  render(){
    if (!this.props.boards) {
      return null;
    }
    // debugger
    const boardIndexItems = Object.values(this.props.boards).map(board => {
      return <BoardIndexItem key={board.id} board={ board } boardId={board.id}/>
    });

    return (
      <div className="boards-index">
       
        <div className="sub-nav">
          <button className="board-button">Boards</button>
        </div>

        <div className="boards-container">
          <ul>
            { boardIndexItems }
          </ul>
        </div>
      </div>
    )
  }
}

export default BoardIndex;