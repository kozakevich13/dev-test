import { useState } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import Display from './components/Display/Display';
import { Context } from "./UserContext";


function App() {

  const [userId, setUserId] = useState([])
  return (
    <div className="App">
       <Context.Provider value={[userId, setUserId]}>
        <PlayersList/>
        <Display/>
        </Context.Provider>
    </div>
  );
}

export default App;
