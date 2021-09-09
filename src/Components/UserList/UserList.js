import React, { useState, useEffect } from 'react';


/*

<AddUser /> 2 inputs, name & age, with text , submit button. Check if empty, if empty open Modal.
<User List /> Display users

*/

function UserList(props) {

  return (
      <div>
          <div className='username'>
              {props.users.map(users=><li>{users.name}{users.age}</li>)}
          </div>
      </div>
          
  );
}

export default UserList;
