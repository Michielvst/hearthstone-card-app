import React, { Props } from 'react';

class Card extends React.Component<any> {
  render() {
    return (
      <div style={{ fontFamily: 'Monospace', border: "5px solid #ADB0C7", borderRadius: "3px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "5%" }}>
        <p><strong>{this.props.cardName}</strong></p>
        <img src={this.props.url} onError={e => {
          e.currentTarget.src = 'https://i.ya-webdesign.com/images/hearthstone-card-png-1.png'
        }} style={{ position: "relative", bottom: "6%" }} />
      </div>
    );
  }
}

export default Card;