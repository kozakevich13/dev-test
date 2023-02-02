import './Player.css';

function Player(players) {

    const listItems = players.listOfPlayers.map((person) => <div><p className='player-name'>{person.name}</p> <p className='team-name'>{person.team}</p></div>);
  return (
    <div className="player">
        <div className='players-list'>{listItems}</div>
    </div>
  );
}

export default Player;
