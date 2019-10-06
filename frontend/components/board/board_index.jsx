import 'React' from 'react';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllBoards();
  }

  render(){
    const { boards } = this.props;
    const boardIndexItems = boards.map(board => {
      return <BoardIndexItem key={board.id} board={ board } />
    });

    return (
      <div className="boards-index">
        <div className="sub-nav">
          <button>Boards</button>
          <button>Pins</button>
        </div>

        <div className="boards-container">
          <ul>
            { BoardIndexItem }
          </ul>
        </div>
      </div>
    )
  }
}

export default BoardIndex;