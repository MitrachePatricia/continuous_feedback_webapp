
// import {
//     MDBContainer,
//     MDBInput,
//     MDBBtn,
//     MDBDropdown, 
//     MDBDropdownMenu, 
//     MDBDropdownToggle, 
//     MDBDropdownItem
//   }
//   from 'mdb-react-ui-kit';
//   import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

//   function Register() {
//     const navigate = useNavigate();
//     const [userName, setuserName] = useState("");
//     const [userMail, setuserMail] = useState("");
//     const [userRole, setuserRole] = useState("");
//     const [userPassword,setuserPassword] = useState("");
//     const [errorMessage, setErrorMessage] = useState("");

//     function validateInput() {
//       if (userName.length < 6 || userName.length > 14) {
//         setErrorMessage("Username must be between 6 and 14 characters long.");
//         return false;
//       }
  
//       if (userName.includes(" ") || userPassword.includes(" ")) {
//         setErrorMessage("Username and password must not contain spaces.");
//         return false;
//       }
  
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
//       if (!emailRegex.test(userMail)) {
//         setErrorMessage("Please enter a valid email address.");
//         return false;
//       }
  
//       if (userPassword.length < 8) {
//         setErrorMessage("Password must be at least 8 characters long.");
//         return false;
//       }
//       if (!/[A-Z]/.test(userPassword)) {
//         setErrorMessage("Password must include at least one uppercase letter.");
//         return false;
//       }
//       if (!/[a-z]/.test(userPassword)) {
//         setErrorMessage("Password must include at least one lowercase letter.");
//         return false;
//       }
//       if (!/[0-9]/.test(userPassword)) {
//         setErrorMessage("Password must include at least one number.");
//         return false;
//       }
//       if (!/[!@#$%^&*]/.test(userPassword)) {
//         setErrorMessage("Password must include at least one special character (!@#$%^&*).");
//         return false;
//       }
  
//       if (!userRole) {
//         setErrorMessage("Please select a role.");
//         return false;
//       }
  
//       setErrorMessage(""); // Clear errors if validation passes
//       return true;
//     }
//     async function registerApi() {
//       event.preventDefault(); // Prevent default form submission behavior

//       if (!validateInput()) {
//         return;
//       }
//      console.log(userRole)
//      await axios.post(`http://localhost:3000/api/user`,{
//       userName: userName,
//       userMail:userMail,
//       userPassword: userPassword,
//       userRole:userRole
//      })
//         .then(res => {
//           navigate('/main',{state:res.data});
//           console.log(res)
//         })
//         .catch(err =>{
//           console.log(err)
//         })
//     }
//     useEffect(() => {
//        console.log(userRole)
//       }, [userRole]);

//       const handleSelect = e => setuserRole(e.target.text)
//     return (
//       <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >
//         <p>Enter your name:</p>
//         <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='name'onChange={e=>{
//         setuserName(e.target.value);
//       }}/>
//         <p>Enter your email:</p>
//         <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='name' onChange={e=>{
//         setuserMail(e.target.value);
//       }}/>
//         <MDBDropdown>
//       <MDBDropdownToggle>Role</MDBDropdownToggle>
//       <MDBDropdownMenu>
//         <MDBDropdownItem link value={"ceva"} onClick={handleSelect}>Student</MDBDropdownItem>
//         <MDBDropdownItem link onClick={handleSelect}>Teacher</MDBDropdownItem>
//       </MDBDropdownMenu>
//     </MDBDropdown>
//     <p>  </p>
//     <p>  </p>
//         <p>Enter your password:</p>
//         <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={e=>{
//         setuserPassword(e.target.value);}}/>
        
//         <MDBBtn className="mb-4"  onClick={registerApi}>Register</MDBBtn>
       
//         <div className="text-center">
//           <p>Already have an account? <a href="/">Login</a></p>
         
//         </div>
  
//       </MDBContainer>
//     );
// }

//   export default Register;
/////////////
  import {
    MDBContainer,
    MDBInput,
    MDBBtn,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem
  } from 'mdb-react-ui-kit';
  import { useEffect, useState } from 'react';
  import axios from 'axios';
  import { useNavigate } from "react-router-dom";
  
  function Register() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userRole, setuserRole] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    function validateInput() {
      if (userName.length < 6 || userName.length > 14) {
        setErrorMessage("Username must be between 6 and 14 characters long.");
        return false;
      }
  
      if (userName.includes(" ") || userPassword.includes(" ")) {
        setErrorMessage("Username and password must not contain spaces.");
        return false;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
      if (!emailRegex.test(userMail)) {
        setErrorMessage("Please enter a valid email address.");
        return false;
      }
  
      if (userPassword.length < 8) {
        setErrorMessage("Password must be at least 8 characters long.");
        return false;
      }
      if (!/[A-Z]/.test(userPassword)) {
        setErrorMessage("Password must include at least one uppercase letter.");
        return false;
      }
      if (!/[a-z]/.test(userPassword)) {
        setErrorMessage("Password must include at least one lowercase letter.");
        return false;
      }
      if (!/[0-9]/.test(userPassword)) {
        setErrorMessage("Password must include at least one number.");
        return false;
      }
      if (!/[!@#$%^&*]/.test(userPassword)) {
        setErrorMessage("Password must include at least one special character (!@#$%^&*).");
        return false;
      }
  
      if (!userRole) {
        setErrorMessage("Please select a role.");
        return false;
      }
  
      setErrorMessage(""); // Clear errors if validation passes
      return true;
    }
  
    async function registerApi(event) {
        event.preventDefault(); // Prevent default form submission behavior
  
        if (!validateInput()) {
          return;
        }
  
        console.log(userRole);
        await axios.post(`http://localhost:3000/api/user`,{
          userName: userName,
          userMail:userMail,
          userPassword: userPassword,
          userRole:userRole
         })
            .then(res => {
              navigate('/main',{state:res.data});
              console.log(res)
            })
            .catch(err =>{
              console.log(err)
              setErrorMessage("Registration failed. Please try again.");

            })
        }
        useEffect(() => {
          console.log(userRole)
         }, [userRole]);
   
         const handleSelect = e => setuserRole(e.target.text)
        //setErrorMessage('');
   

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <p>Enter your name:</p>
            <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='name' onChange={e => {
                setUserName(e.target.value);
            }} />
            
            <p>Enter your email:</p>
            <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={e => {
                setUserMail(e.target.value); 
            }} />
            
            <MDBDropdown>
                <MDBDropdownToggle>Role</MDBDropdownToggle>
                <MDBDropdownMenu>
                <MDBDropdownItem link value={"ceva"} onClick={handleSelect}>Student</MDBDropdownItem>
                 <MDBDropdownItem link onClick={handleSelect}>Teacher</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            
            <p style={{ margin: '1rem 0'}} />
  
            <p>Enter your password:</p>
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={e => {
                setUserPassword(e.target.value);
            }} />
  
            {/* Display validation errors */}
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            
            <MDBBtn className="mb-4" href="#" onClick={registerApi}>Register</MDBBtn>
           
            <div className="text-center">
                <p>Already have an account? <a href="/">Login</a></p>
            </div>
        </MDBContainer>
    );
  }
  
  export default Register;