import React from 'react';

import PlayerCard from "./components/PlayerCard"
import NavBar from "./components/NavBar";
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data:[]

    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(name => this.setState({ data: name}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <div className="cards">
          <h1>{console.log(this.state.name)}</h1>
          {this.state.data.map(players => 
          <PlayerCard 
          players={players}
          />)}
        </div>

      </div>
    )
  }
}

export default App;
