import React from "react";
import { useSelector,useDispatch } from "react-redux";
import LoadingScreen from "./LoadingScreen";


const PrivateRoute = ({ children }) => {
  const { loading } = useSelector((state) => ({ ...state.auth }));
 
  return ( 
    loading 
    ?
    <LoadingScreen />
    
    :
    children 
  )
};

export default PrivateRoute;