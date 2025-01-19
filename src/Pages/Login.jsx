import {
  MDBContainer,
  MDBInput,
  MDBBtn,

}
from 'mdb-react-ui-kit';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [userPassword,setuserPassword] = useState("");

  async function loginApi() {
    if(!validateInput()){
      return;
    }

    console.log(userName,userPassword)
   await axios.post(`http://localhost:3000/api/userLogin`,{
    userName: userName,
    userPassword: userPassword
   })
      .then(res => {
        navigate("/main")
        console.log(res)
      })
      .catch(err =>{
        console.log(err)
        setErrorMessage("Invalid username or password");
      })
  }
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
      <p>Enter your name:</p>
      <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='name' onChange={e=>{
        setuserName(e.target.value);
      }}/>
      <p>Enter your password:</p>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={e=>{
        setuserPassword(e.target.value);
      }}/>

      <MDBBtn className="mb-4"  onClick={loginApi}>
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>Do not have an account? <a href="register">Register</a></p>
       
      </div>

    </MDBContainer>
  );
}

export default Login;