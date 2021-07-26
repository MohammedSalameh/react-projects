import React, {useState} from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';
import Crypto from './Components/Crypto/Crypto';

function App() {
 const [usersList, setUsersList] = useState([
   {'name': 'Mummi', age: 36},
   {'name': 'Michael', age: 12},
   {'name': 'Saunders', age: 56},
   
 ]);

 const addUserHandler = (username, age) => {
  setUsersList((prevUsersList) => {
     return [...prevUsersList, {name: username, age: age}];
   })
 }

  return (
    <>
      <Crypto />
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
