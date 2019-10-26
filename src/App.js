import React from 'react';
import './App.css';
import {Header} from "./component/header";
import {Player} from "./component/player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 1, id: 1},
      {name: 'HONG', score: 2, id: 2},
      {name: 'KIM', score: 3, id: 3},
      {name: 'PARK', score: 4, id: 4},
    ]
  };
  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(item => item.id !== id)
      }
    })
  }

  handleChangeScore = (id, delta) => {
    // console.log('index: ' + index, 'delta: ' + delta);
    this.setState(prevState => {
      const players = [...prevState.players];
      players.forEach(player => {
        if (player.id === id){
          player.score += delta;
        }
      })

      return players;
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="My scoreboard" totalPlayers={this.state.players.length} />

        {/*Players List*/}
        { this.state.players.map(item => <Player name={item.name}
                                                 key={item.id.toString()}
                                                 score={item.score}
                                                 removePlayer={this.handleRemovePlayer}
                                                 changeScore={this.handleChangeScore.bind(this)}
                                                 id={item.id} />)
        }
      </div>
    );
  }
}

export default App;
