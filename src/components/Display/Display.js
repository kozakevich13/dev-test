import './Display.css';
import { useEffect, useState, useContext } from 'react';
import { Context } from "../../UserContext";
import Table from '../Table/Table';

function Display() {

  const [userInfo, setUserInfo] = useState([])
  const [context, setContext] = useContext(Context);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [main, setMain] = useState()
    
  useEffect(() => {

    // if(userInfo == 0 || userInfo.find(x => x.id === context) ) {
      console.log('спрацьовує запрос')
      fetch(`https://www.balldontlie.io/api/v1/players/${context}`)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo([...userInfo, data]);
        setIsLoggedIn(true)
      });
    // }
  }, [context]);


  useEffect(()=>{
    if(userInfo.find(x => x.id === context)) {
      console.log('спрацьовує видалення елемена')
      const objWithIdIndex = userInfo.findIndex((obj) => obj.id === context);
      if (objWithIdIndex > -1) {
        userInfo.splice(objWithIdIndex, 1);
      }
      setUserInfo(userInfo)
    }
  },[context])


  // useEffect(()=>{
  //   if(userInfo.find(x => x.id === context)) {
  //     console.log('dduplica')
  //     const objWithIdIndex = userInfo.findIndex((obj) => obj.id === context);
  //     if (objWithIdIndex > -1) {
  //       userInfo.splice(objWithIdIndex, 1);
  //     }
  //     setUserInfo(userInfo)

  //   }
  // },[userInfo])

  console.log(userInfo)



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
      <div >
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
