import React from 'react';
import BoardIndexItem from '../board/board_idex_item';


class BoardIndex extends React.Component {
  // debugger
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    // debugger
    this.props.fetchAllBoards();
  }

  render(){
    // debugger
    if (!this.props.boards) {
      return null;
    }

    // const boards = Object.values(this.props);
    
    const boardIndexItems = Object.values(this.props.boards).map(board => {
      return <BoardIndexItem key={board.id} board={ board } />
    });

  

    return (
      <div className="boards-index">
       
        <div className="sub-nav">
          <button className="board-button">Boards</button>
          <button className="board-button">Pins</button>
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