import React, { Props } from "react";

class Card extends React.Component<any> {
  render() {
    return (
      <div className="card">
        <h2>{this.props.cardName}</h2>
        <img
          src={this.props.url}
          onError={(e) => {
            e.currentTarget.src =
              "https://wow.zamimg.com/images/hearthstone/cardbacks/original/Card_Back_TeSPA.png?8313";
          }}
          style={{ position: "relative", bottom: "6%" }}
        />
      </div>
    );
  }
}

export default Card;
