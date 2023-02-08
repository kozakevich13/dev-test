import './Display.css';
import { useEffect, useState, useContext } from 'react';
import { Context } from "../../UserContext";
import Table from '../Table/Table';

function Display() {

  const [userInfo, setUserInfo] = useState([])
  const [context, setContext] = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
    
  useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/${context}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo([...userInfo, data]);
        setIsLoggedIn(true)
      });
  }, [context]);


 
 
  function removeDuplicates  (arr)  {
    const strArr = arr.map((obj) => JSON.stringify(obj));
    const uniq = [...new Set(strArr)].map((u) => JSON.parse(u));
    return uniq;
  };


  // const removeObjectWithId = (arr, id) => {
  //   const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
  //   if (objWithIdIndex > -1) {
  //     arr.splice(objWithIdIndex, 1);
  //   }
  //   return arr;
  // }

  // useEffect(()=> {
  //     if(arrayWithoutDuplicate.find(x => x.id === context)) {
  //       console.log('dup')
  //        setArrayWithoutDuplicate(removeObjectWithId(arrayWithoutDuplicate, context))
  //     }
  // },[userInfo])


  return (
    <div className="display">
      <div className='main-header'>
        <p className='header-table'>NBA</p>
        <h2 className='header-table'>players board</h2>
      </div>
      <div onClick={()=>{test()}}>
        {isLoggedIn ? (
          userInfo.map(player => <Table key={player.id} player={player}/>)
        ) : (
          <div>Empty</div>
        )}
      </div>
    </div>
  );
}

export default Display;
