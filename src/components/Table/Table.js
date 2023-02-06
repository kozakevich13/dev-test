import './Table.css';
import { useEffect, useState, useContext } from 'react';
import { Context } from "../../UserContext";

function Table() {

  const [ userInfo, setUserInfo] = useState([])
  const [ userStat, setUserStat] = useState([])
  const [context, setContext] = useContext(Context);
    
  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/${context}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [context]);



  return (
    <div className="table">
      <div className='main-header'>
        <p className='header-table'>NBA</p>
        <h2 className='header-table'>players board</h2>
      </div>
      
      <table className="main-table">
        <tr className='name-column'>
          <th id='name'>NAME</th>
          <th id='column'>TEAM</th>
          <th id='column'>GP</th>
          <th id='column'>MIN</th>
          <th id='column'>PTS</th>
          <th id='column'>FG</th>
        </tr>
        <tr>
          <td>{userInfo.first_name}</td>
          <td>team</td>
          <td>4</td>
          <td>45</td>
          <td>63</td>
          <td>23%</td>
        </tr>
      </table>

      <div>{context}</div>
    </div>
  );
}

export default Table;
