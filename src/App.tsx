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
  types?: any;
  typesFilter?: any;
}

class App extends React.Component<{}> {
  state: IState = {
    cards: {},
    sets: [],
    types: [],
    typesFilter: 'all'
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
    console.log(setName);
    if (setName === 'none') {
      this.setState({
        cards: {},
        types: ''
      });
      return;
    }
    const selectedCards = await this.fetchCards(setName);
    this.setState({
      cards: selectedCards.filter((card: any) => { return card['img'] })
    });
    this.setTypes();
  };

  setTypesFilter = (e: any) => {
    const selectedType = e.currentTarget.value;
    this.setState({
      typesFilter: selectedType
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
    const sets = info["sets"].filter((el: any) => el !== "Promo" && el !== "System" && el !== "Debug");
    console.log(sets);
    this.setState({
      sets: sets
    });
  }

  setTypes = () => {
    const cards = this.state.cards;
    const types = Array.from(cards).reduce((acc: any, current: any) => {
      if (acc.includes(current.type)) {
        return acc;
      }
      acc.push(current.type);
      return acc;
    }, []);
    this.setState({
      types
    });
  };

  renderCards = () => {
    const cards = Array.from(this.state.cards).filter((el: any) => {
      if (this.state.typesFilter === 'all') {
        return true;
      } else {
        return this.state.typesFilter === el.type;
      }
      //return this.state.typesFilter === 'all' ? true : (this.state.typesFilter === el.type);
    })


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
        <div className="App" style={{ display: "flex", flexDirection: "column", paddingLeft: "10%", paddingRight: "10%", alignItems: "center", margin: "10px" }}>
          <img src="https://s3-storage.textopus.nl/wp-content/uploads/2015/09/18031825/Hearthstone-iPhone-iPad.jpg" className="backimg" alt="logo" />
          <ExpansionPicker sets={this.state.sets} loadCards={this.loadCards} types={this.state.types} setTypesFilter={this.setTypesFilter} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
          {this.renderCards()}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
