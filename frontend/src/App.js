import React from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Results from './pages/Results';
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
      default: "FFFFFF"
    }
  },
  typography: {
    fontFamily: [
      'Fira Sans', 
      'Noto Sans JP',
      'Source Serif Pro'
    ].join(','),
  }
});

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='search' element={<Search />} />
                <Route path='results' element={<Results />} />

            </Routes>
        </BrowserRouter>
        <Outlet />
      </ThemeProvider>
  );
}

export default App;                     