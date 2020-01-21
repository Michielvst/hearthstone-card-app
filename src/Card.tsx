import React, { Props } from 'react';

class Card extends React.Component<any> {
  render() {
    return (
      <div>
        <p>{this.props.cardName}</p>
        <img src={this.props.url} onError={e => {
          e.currentTarget.src = 'https://www.hearthstonetopdecks.com/wp-content/uploads/2014/03/acidic-swamp-ooze-300x429.png'
        }} />
      </div>
    );
  }
}

export default Card;