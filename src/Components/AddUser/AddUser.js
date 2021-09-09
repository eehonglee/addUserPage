import React, { useState, useEffect } from 'react';
import AddUserForm from './AddUserForm';


/*

<AddUser /> 2 inputs, name & age, with text , submit button. Check if empty, if empty open Modal.
<User List /> Display users

*/

function AddUser(props) {


    const newUserHandler = (userDetails) =>{
        const newUser = {...userDetails};
        console.log(newUser);
        props.onAddUserList(newUser);
    }
       


  return (
      <div>
          <AddUserForm onAddUser={newUserHandler}/>
      </div>
          
  );
}

export default AddUser;
