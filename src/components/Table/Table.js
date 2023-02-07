import './Table.css';

function Table(userInfo) {

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
          <td>{userInfo.player.first_name} {userInfo.player.last_name}, {userInfo.player.team.abbreviation} </td>
          <td>{userInfo.player.team.full_name}</td>
          <td>{userInfo.player.team.city}</td>
          <td>{userInfo.player.team.division}</td>
          <td>{userInfo.player.team.conference}</td>
        </tr>
      </table>
    </div>
  );
}

export default Table;
