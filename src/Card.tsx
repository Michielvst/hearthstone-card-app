import React, { Props } from 'react';

class Card extends React.Component<any> {
  render() {
    return (
      <div style={{ fontFamily: 'Monospace', border: "5px solid #ADB0C7", borderRadius: "3px", margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "5%" }}>
        <p style={{ position: "relative", top: "10px" }}><strong><u>{this.props.cardName}</u></strong></p>
        <img src={this.props.url} onError={e => {
          e.currentTarget.src = 'https://wow.zamimg.com/images/hearthstone/cardbacks/original/Card_Back_TeSPA.png?8313'
        }} style={{ position: "relative", bottom: "6%" }} />
      </div>
    );
  }
}

export default Card;