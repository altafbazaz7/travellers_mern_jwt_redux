import { Button,Stack } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { Form, StyledLink, StyledTextFields, StyledTypography } from '../Components/Styles/CommonStyles';
import {useDispatch} from "react-redux";
import { useNavigate } from 'react-router-dom';
import { register } from '../Redux/Features/authSlice';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerDetails = {
    firstName: "",
    lastName:"",
    email:"",
    password:""
  }
  const [RegisterDetails,setRegisterDetails] = useState(registerDetails);
  const handleChange = (event) => {
    const {name,value} = event.target;
      setRegisterDetails({
        ...RegisterDetails,
        [name]: value
      })
  }

  const handleRegister = () => {
      const {firstName,lastName,email,password} = RegisterDetails;
      
      if(firstName && lastName && email && password) {
        dispatch(register({RegisterDetails,navigate}))
        console.log('Registered Successfully.')
      }
  }
  const[Stage,setStage]=useState(1);
  return (
    <>
    <Form>
    <StyledTypography>Register</StyledTypography>
    {
      Stage === 1 && (  
        <>
          <StyledTextFields name="firstName" variant='outlined' id="outlined-basic"  onChange={handleChange} value={RegisterDetails.firstName} label="First Name"/>
          <StyledTextFields  name="lastName" variant='outlined' id="outlined-basic" onChange={handleChange} value={RegisterDetails.lastName}  label="Last Name"/>
    <Button variant="contained" onClick={() => setStage(2)}>Next</Button>

        </>                   
               )
    }
    {
      Stage === 2 && (  
        <>
          <StyledTextFields name="email" variant='outlined' id="outlined-basic" onChange={handleChange}   value={RegisterDetails.email}  label="Email Address"/>
          <StyledTextFields name="password" variant='outlined' id="outlined-basic"  onChange={handleChange} value={RegisterDetails.password} label="Password"/>
          <Stack direction="row">
          <Button variant="contained" onClick={()=>setStage(1)}>Back</Button>
          <Button variant="contained" onClick={handleRegister} >Register</Button>
          </Stack>
    

        </>                   
               )
    }
    <StyledLink to="/login">Already have an account? Login.</StyledLink>

</Form>

</>
  )
}

export default Register