import { createTheme } from '@mui/material';

export const WebsiteTheme = createTheme({
  palette: {
    primary: {
      main: '#FFF3F8',
      bgColor: '#F3F7ED',
      typography:"090004",
      link:"#FF0C0C"
    },
    secondary: {
      main: '#4D52F0',
    },
  },
  fontSizes:{
    small:{
        primary:"8px",
        secondary:"12px",
        ternary:"14px"
    },
    medium:{
        primary:"18px",
        secondary:"22px",
        ternary:"34px"
    }
  }
});

