import './Display.css';
import { useEffect, useState, useContext } from 'react';
import { Context } from "../../UserContext";

function Display() {

  const [ userInfo, setUserInfo] = useState([])
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
          <th id='column'>CITY</th>
          <th id='column'>DIVISION</th>
          <th id='column'>CONFERENCE</th>
        </tr>
        <tr>
          {/* <td>{userInfo.first_name} {userInfo.last_name}, {userInfo.team.abbreviation} </td>
          <td>{userInfo.team.full_name}</td>
          <td>{userInfo.team.city}</td>
          <td>{userInfo.team.division}</td>
          <td>{userInfo.team.conference}</td> */}
        </tr>
      </table>
    </div>
  );
}

export default Display;
