import React, { useState } from 'react';
import AddUser from './Components/AddUser/AddUser';
import UserList from './Components/UserList/UserList';



/*

<AddUser /> 2 inputs, name & age, with text , submit button. Check if empty, if empty open Modal.
<User List /> Display users

*/

function App() {

  const [userList,setNewUserList] = useState([]);
  
  const userListHandler = newUser =>{
    setNewUserList((userList)=>{ return [newUser,...userList]});
    console.log(userList);
  }

  return (
    <div className="App">
      <AddUser onAddUserList={userListHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
