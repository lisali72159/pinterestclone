import React from 'react';
import PinIndexItem from './board_index_item';

class PinIndex extends React.Component {
  // debugger
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger
    this.props.fetchAllPins();
  }

  render() {
    // debugger
    if (!this.props.pins) {
      return null;
    }
    // debugger
    const pinIndexItems = Object.values(this.props.pins).map(pin => {
      return <PinIndexItem key={pin.id} pin={pin} />
    });

    return (
      <div className="pins-index">

          <ul>
            {pinIndexItems}
          </ul>
       
      </div>
    )
  }
}

export default PinIndex;