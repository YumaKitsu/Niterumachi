import React from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './pages/Home';



const theme = createTheme({
  palette: {
    primary: {
      main: "#4D77FF",
    },
    secondary: {
      main: "#f3e5f5"
    },
    background: {
      default: "#F1FDF3"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Home />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;                     