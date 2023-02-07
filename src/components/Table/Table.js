import './Table.css';

function Table() {

 

  return (
    <div className="table">
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
