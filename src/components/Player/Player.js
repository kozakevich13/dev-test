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
      <button  onClick={() => addUserId(player.id)} className='players-list'>{player.last_name}</button>
    </div>
  );
}

export default Player;
