import React from 'react';
import ExpansionPicker from './ExpansionPicker';
import './App.css';

interface IState {
  cards?: any;
  sets?: any;
  filter: string;
}

class App extends React.Component<{}> {
  state: IState = {
    cards: {},
    sets: {},
    filter: "",
  };

  setFilter = (e: any) => {
    console.log(e.currentTarget.value);
    const filter: string = e.currentTarget.value.replace(/ /g, '%2520');
    console.log(filter);
    this.setState({
      filter
    })
  };

  fetchData = async () => {
    const res = await fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/info", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": "2e289cf61amshcc75ff8951085c4p1bc412jsn693c4f7f9db4"
      }
    });
    const data = await res.json();
    console.log(data);
    return data;
  };

  loadSets = async (data: any) => {
    const info = await data;
    const sets = info["sets"];
    console.log(sets);
    this.setState({
      sets: sets
    });
  }

  componentDidMount() {
    this.loadSets(this.fetchData());
  }

  render() {
    return (
      <div className="App" style={{ display: "flex", flexDirection: "column", paddingLeft: "10%", paddingRight: "10%", alignItems: "center" }}>
        <img src="https://s3-storage.textopus.nl/wp-content/uploads/2015/09/18031825/Hearthstone-iPhone-iPad.jpg" className="backimg" alt="logo" />
        <ExpansionPicker sets={this.state.sets} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;
