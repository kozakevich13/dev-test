import './PlayersList.css';
import Player from '../Player/Player';

function PlayersList() {

    const players = [
        {name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {name: "Michael Jordan, CHI", team: "Chicago Bulls"},
    ]

  return (
    <div className="PlayersList">
        <h4 className='header-list'>Pick one of the player</h4>
        <div className='playerslist'>
            <Player listOfPlayers = {players}/>
        </div>
        
    </div>
  );
}

export default PlayersList;
