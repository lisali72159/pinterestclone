import React from 'react';
import PinIndexItem from './pin_index_item';

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
      return <PinIndexItem key={pin.id} pin={pin} />
    });

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