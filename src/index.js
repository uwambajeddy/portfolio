import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as ThemeProvide } from './Context';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const THEME = createTheme({
  typography: {
   "fontFamily": `Montserrat`
  }
});

ReactDOM.render(
  <ThemeProvider theme={THEME}>
  <ThemeProvide>
    <App />
  </ThemeProvide>,
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
