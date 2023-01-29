import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../Redux/Features/authSlice';
import { useDispatch } from 'react-redux';

export default function LoadingScreen() { 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(()=>{
        setTimeout(()=>{
        dispatch(setLoading(false))
        navigate("/login")
        },2500)


    },[])
  return (
    <Box sx={{ display: 'flex', marginLeft:"50%", marginTop:"5%"}}>
      <CircularProgress sx={{color:"black"}} />
    </Box>
  );
}
