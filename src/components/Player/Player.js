import './Player.css';

function Player(players) {

  const listItems = players.listOfPlayers.map((person) => 
    <div key={person.id} className='item'>
      <p className='player-name'>{person.first_name} {person.last_name}, {person.team.abbreviation} </p> 
      <p className='team-name'>{person.team.full_name}</p>
    </div>);

  return (
    <div className="player">
             <div className='players-list'>{listItems}</div>
    </div>
  );
}

export default Player;
