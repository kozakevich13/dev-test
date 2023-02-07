import './Display.css';
import { useEffect, useState, useContext } from 'react';
import { Context } from "../../UserContext";
import Table from '../Table/Table';

function Display() {

  const [userInfo, setUserInfo] = useState([])
  const [context, setContext] = useContext(Context);
  const [isLoading, setisLoading] = useState(false);
    
  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/${context}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo([...userInfo, data]);
        setisLoading(true);
      });
  }, [context]);

  const tableContent = userInfo && userInfo.map(player => <Table key={player.id} player={player}/>)

  return (
    <div className="display">
      <div className='main-header'>
        <p className='header-table'>NBA</p>
        <h2 className='header-table'>players board</h2>
      </div>
        {tableContent}
    </div>
  );
}

export default Display;
