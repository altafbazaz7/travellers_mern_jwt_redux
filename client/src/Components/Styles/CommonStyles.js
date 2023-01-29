import {styled} from "@mui/material";
import {Stack,Typography,TextField} from "@mui/material"
import { Link } from "react-router-dom";


export const Form = styled(Stack)(({ theme }) => ({
    width:"fit-content",
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    boxShadow:"3px 1px 3px 3px silver",
    marginLeft:"40%",
    marginTop:"5%",
    padding:"1.75rem",
    background:theme.palette.primary.bgColor
  }));

  
export const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: theme.fontSizes.medium.ternary,
    color: theme.palette.primary.typography
  }));

  export const StyledTextFields =  styled(TextField)(({ theme }) => ({
   marginTop: `${theme.fontSizes.medium.secondary}!important`
  }));


  export const StyledLink =  styled(Link)(({ theme }) => ({
    color:theme.palette.primary.link,
    textDecoration:"none",
    fontSize:theme.fontSizes.medium.primary,
    transition:"all 0.5s ease-in",
    '&:hover': {
      color: theme.palette.primary.typography,
      
    },
   }));
 
 
   