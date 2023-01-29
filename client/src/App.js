import React, { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from "./Pages/Register";
import Landing from './Pages/Landing';
import Header from "./Components/Header";
import "./App.css"
import { useDispatch } from 'react-redux';
import {setUser,setLoading} from "./Redux/Features/authSlice"
import PrivateRoute from './Components/PrIvateRoute';

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("LoggedIn"));
 useEffect(()=>{
    dispatch(setUser(user))
    if(!user){
      dispatch(setLoading(true))
  }
 },[])

  return (
    <>
    <Header />
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<PrivateRoute><Landing/></PrivateRoute>}/>


      </Routes>
    </>
  )
}

export default App