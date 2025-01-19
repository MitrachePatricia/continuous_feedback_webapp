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
  const [userPassword, setuserPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  async function loginApi(event) {
    event.preventDefault();
    console.log(userName, userPassword);

    try {
      const res = await axios.post(`http://localhost:3000/api/userLogin`, {
        userName: userName,
        userPassword: userPassword
      });
      navigate("/main");
      console.log(res);
    } catch (err) {
      console.log(err);
      if (err.response && err.response.status === 404) {
        setErrorMessage("User not found");
      } else if (err.response && err.response.status === 401) {
        setErrorMessage("Invalid password");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <p>Enter your name:</p>
      <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='name' onChange={e => {
        setuserName(e.target.value);
      }} />

      <p>Enter your password:</p>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={e => {
        setuserPassword(e.target.value);
      }} />

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <MDBBtn className="mb-4" onClick={loginApi}>
        Sign in
      </MDBBtn>

      <div className="text-center">
        <p>Do not have an account? <a href="register">Register</a></p>
      </div>
    </MDBContainer>
  );
}

export default Login;
