import React from 'react';
import ExpansionPicker from './ExpansionPicker';
import './App.css';
import Card from './Card';

const endpoint = `https://omgvamp-hearthstone-v1.p.rapidapi.com`;
const host = `omgvamp-hearthstone-v1.p.rapidapi.com`;
const key = `2e289cf61amshcc75ff8951085c4p1bc412jsn693c4f7f9db4`;

interface IState {
  cards?: any;
  sets?: any;
}

class App extends React.Component<{}> {
  state: IState = {
    cards: {},
    sets: {},
  };

  fetchCards = async (setName: string) => {
    const res = await fetch(`${endpoint}/cards/sets/${setName}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": host,
        "x-rapidapi-key": key
      }
    });
    const data = await res.json();
    return data;
  };

  loadCards = async (e: any) => {
    const setName: string = e.currentTarget.value.replace(/ /g, '%2520');
    const selectedCards = await this.fetchCards(setName);
    this.setState({
      cards: selectedCards.filter((card: any) => { return card['img'] })
    });

  };

  fetchData = async () => {
    const res = await fetch(`${endpoint}/info`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": host,
        "x-rapidapi-key": key
      }
    });
    const data = await res.json();
    return data;
  };

  loadSets = async (data: any) => {
    const info = await data;
    const sets = info["sets"];
    this.setState({
      sets: sets
    });
  }

  renderCards = () => {
    const cards = this.state.cards;
    console.log(cards);
    return (
      Array.from(cards).map((el: any) =>
        <Card url={el.img} cardName={el.name} />
      )
    );
  };

  componentDidMount() {
    this.loadSets(this.fetchData());
  }

  render() {
    return (
      <React.Fragment>
        <div className="App" style={{ display: "flex", flexDirection: "column", paddingLeft: "10%", paddingRight: "10%", alignItems: "center" }}>
          <img src="https://s3-storage.textopus.nl/wp-content/uploads/2015/09/18031825/Hearthstone-iPhone-iPad.jpg" className="backimg" alt="logo" />
          <ExpansionPicker sets={this.state.sets} loadCards={this.loadCards} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          {this.renderCards()}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
