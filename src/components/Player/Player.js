import './Player.css';
import { useContext } from "react";
import { Context } from "../../UserContext";

function Player({player}) {

  const [context, setContext] = useContext(Context);

  const addUserId = (id) => {
    setContext(id);
  };
 
  return (
    <div className="player">
      <button onClick={() => addUserId(player.id)} className='item'>{player.id} {player.first_name} {player.last_name}, {player.team.abbreviation}</button>
    </div>
  );
}

export default Player;
