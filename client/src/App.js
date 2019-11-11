import React from 'react';
import './App.css';

import Player from './components/Player.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => {
        return response.json();
      })
      .then(response => {
        this.setState( { players: response} );
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id="header">Players</h1>
        </header>
      
        <div className="player-container">
          {this.state.players.map(players => {
            return <Player key={players.id} players={players} />
          })}
        </div>
      </div>
    )
  }

}

export default App;
