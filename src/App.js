import { useState } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import Table from './components/Table/Table';
import { Context } from "./UserContext";


function App() {

  const [userId, setUserId] = useState([])
  return (
    <div className="App">
       <Context.Provider value={[userId, setUserId]}>
        <PlayersList/>
        <Table/>
        </Context.Provider>
    </div>
  );
}

export default App;
