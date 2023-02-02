import './PlayersList.css';
import Player from '../Player/Player';

function PlayersList() {

    const players = [
        {id: '1', name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {id: '2', name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {id: '3', name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {id: '4', name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {id: '5', name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {id: '6', name: "Michael Jordan, CHI", team: "Chicago Bulls"},
        {id: '7', name: "Michael Jordan, CHI", team: "Chicago Bulls"},
    ]

  return (
    <div className="main-players-block">
        <h4 className='header-list'>Pick one of the player</h4>
        <div className='playerslist'>
            <Player listOfPlayers = {players}/>
        </div>
    </div>
  );
}

export default PlayersList;
