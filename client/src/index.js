import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { WebsiteTheme } from './Components/Styles/WebsiteTheme';
import { Provider } from 'react-redux';
import store from './Redux/Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ThemeProvider theme={WebsiteTheme}>
         <App />      
     </ThemeProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
