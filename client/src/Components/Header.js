import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../Redux/Features/authSlice';
import decode from "jwt-decode";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';



export default function MenuAppBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user,loading } = useSelector((state) => ({ ...state.auth }));
    const token = user?.token;
    const [auth, setAuth] = React.useState(true);

    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken)
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch(setLogout());
        setAuth(false)
      }
    }

  
const handleLogout = () => {
  dispatch(setLogout());
  navigate("/login")
  setAuth(false)
}




  return (
    
    <Box sx={{ flexGrow: 1}}>
    
        
      <AppBar position="static">
        <Toolbar sx={{opacity: loading === true ? 0.5 : 1  }}>
          
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Travelerz 
          </Typography>
            {
             user
                ?
            <Button  variant="contained" onClick={handleLogout}>Logout</Button>
                    :

            <Button  variant="contained" onClick={() => navigate("/login")}>Login</Button>

            }
        </Toolbar>
      </AppBar>
    </Box>
  );
}