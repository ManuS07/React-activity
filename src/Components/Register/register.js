import './register.css';
import React, { useState } from 'react';

function Register() {
  const [values, setValue] = useState({
    firstName:'',
    lastName:'',
    email:''
  });
  const [submit, setSubmit] = useState(false);
  const [valid,setValid] = useState(false);

  const handleFirstNameInput =(event) => {
    setValue({...values,firstName: event.target.value})
  };
  const handleLastNameInput =(event) => {
    setValue({...values,lastName: event.target.value})
  };
  const handleEmailInput =(event) => {
    setValue({...values,email: event.target.value})
  };
  const handleSubmit =(event) => {
    event.preventDefault();
    if(values.firstName && values.lastName && values.email){
      setValid(true);
    }
    setSubmit(true);
  }
  
  
  return (
    <div className='container1'>
    <div className='all'>
      <form className='register' onSubmit={handleSubmit} >
        {submit && valid? <div className = "success">Success! Thank you for registering</div> : null}
          <input
          type='text'
          value={values.firstName}
          className = 'form'
          name = 'firstName'
          placeholder = 'First Name'
          onChange = {handleFirstNameInput}
        />
        {submit && !values.firstName ? <span>Please enter first name</span> : null}
        <input
          type='text'
          value={values.lastName}
          className = 'form'
          name = 'lastName'
          placeholder = 'Last Name'
          onChange = {handleLastNameInput}
        />
        {submit && !values.lastName ? <span>Please enter last name</span> : null}        
        <input
         type='email'
         value={values.email}
         className = 'form'
         name = 'email'
         placeholder = 'Email'
         onChange = {handleEmailInput}
        />
        {submit && !values.email ? <span>Please enter email</span> : null}
        <div className='click'>
        <button type='submit' onClick={handleSubmit}>
          Register
        </button>

        </div>
        
      </form>
    </div>
  </div>

  );
    
}

export default Register;