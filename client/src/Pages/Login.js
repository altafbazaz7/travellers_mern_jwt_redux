import { Button } from "@mui/material"
import { useState } from "react"
import { Form, StyledTextFields, StyledTypography } from "../Components/Styles/CommonStyles"
import {useDispatch} from "react-redux"
import { login } from "../Redux/Features/authSlice"
import { useNavigate } from "react-router-dom"
 
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


   const loginDetails = {
    email: '',
    password:''
   };
   const[LoginDetails,SetLoginDetails]=useState(loginDetails);

const handleChange = (event) => {
        const {name,value} = event.target;
        SetLoginDetails({
            ...LoginDetails,
            [name]:value
        })
    }

  const handleClick = () => {
    const { email, password } = LoginDetails;
      if(email && password){
        dispatch(login({LoginDetails,navigate}))
      }

      
  }
  return (
    <>
    <Form>
        <StyledTypography>Login</StyledTypography>
        <StyledTextFields name="email" variant='outlined' id="outlined-basic" onChange={handleChange} value={LoginDetails.email} label="Enter Your Email Here !"/>
        <StyledTextFields name="password" variant='outlined' id="outlined-basic" onChange={handleChange} value={LoginDetails.password} label="Enter Your Password Here !"/>
        <Button variant="contained" onClick={handleClick}>Login</Button>
    </Form>


    </>
  )
}

export default Login