import React from 'react';
import PinIndexItemContainer from './pin_index_item_container';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    if (!this.props.pins) {
      return null;
    }
    const pinIndexItems = Object.values(this.props.pins).map(pin => {
      return <PinIndexItemContainer key={pin.id} pin={pin} pinId={pin.id}/>
    });
    debugger
    return (
      <div className="masonry">
        <div className="pin-photo">
            {pinIndexItems}
        </div>
      </div>
    )
  }
}

export default PinIndex;