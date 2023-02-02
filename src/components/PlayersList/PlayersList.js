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


  return (
    <div className="main-players-block">
        <h4 className='header-list'>Pick one of the player</h4>
        <div className='playerslist'>
          {players.length > 0 &&
              <Player listOfPlayers = {players}/> 
          }
        </div>
    </div>
  );
}

export default PlayersList;
