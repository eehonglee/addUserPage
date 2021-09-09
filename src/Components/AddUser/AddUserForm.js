import React, { useState, useEffect } from 'react';


/*

<AddUser /> 2 inputs, name & age, with text , submit button. Check if empty, if empty open Modal.
<User List /> Display users

*/


function AddUserForm(props) {

    const [userName,setUserName] = useState('');
    const [userAge,setUserAge] = useState('');


    const nameHandler = event =>{
        setUserName(event.target.value);
    }

    const ageHandler = event =>{
        setUserAge(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const userDetails = {
            name:userName,
            age:userAge
        };

        props.onAddUser(userDetails);
        console.log(userDetails);
        setUserName('');
        setUserAge('');

    };


  return (
      <form onSubmit={submitHandler}>
          <div className='adduser__inputs'>
            <div className='adduser__input'>
                 <label htmlFor='name'>Name:</label>
                 <input type='text' value={userName} onChange={nameHandler}></input>
            </div>
            <div className='adduser__input'>
                 <label htmlFor='age'>Age:</label>
                 <input type='number' value={userAge} onChange={ageHandler}></input>
            </div>
          </div>
          <div className='adduser__actions'>
              <button type='submit'>Submit!</button>
          </div>
      </form>
  );
}

export default AddUserForm;
