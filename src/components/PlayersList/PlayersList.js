import React, { useState, useEffect } from "react";
import './PlayersList.css';
import Player from '../Player/Player';

function PlayersList() {

  const [players, setPlayers] = useState([]);
  
  useEffect(() => {
    fetch(" https://www.balldontlie.io/api/v1/players")
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.data);
      });
  }, []);

  
  const playersList = players.map(player => <Player   key={player.id} player={player}/>)

  return (
    <div className="main-players-block">
        <h4 className='header-list'>Pick one of the player</h4>
        <div className='playerslist'>
         
              
          {
            playersList
          }
        </div>
    </div>
  );
}

export default PlayersList;
