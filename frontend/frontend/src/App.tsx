import React from 'react';
import { CssBaseline, Stack, Typography, Box } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import Results from './pages/Results';
import Home from './pages/Home';
import Accommodations from './pages/Accommodations';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import './App.css';
import logo from "./assets/images/not_found.svg";
import AboutService from './pages/AboutService';


const theme = createTheme({
  palette: {
    primary: {
      main: "#1e88e5",
    },
    secondary: {
      main: "#f3e5f5"
    },
    background: {
      default: "#FFFF"
    }
  },

  typography: {
    fontFamily: [
      'Hina Mincho'
    ].join(',')
  }

});


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />}>
            <Route path='/' element={<AboutService />} />
          </Route>
          <Route path='search' element={<Search />} />
          <Route path='results' element={<Results />} /> 
          <Route path='accommodations' element={<Accommodations />} />
          <Route path='terms' element={<Terms />} />
          <Route path='privacy' element={<Privacy />} />
          <Route
            path="*"
            element={
              <Stack direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ m: 10 }}>
                <Typography variant="h4" >ページが見つかりませんでした</Typography>
                <Box
                  component="img"
                  sx={{
                    maxWidth: "100%",
                    width: 450,
                    height: "auto",
                    margin: 10
                  }}
                  alt="illustration"
                  src={logo}
                />
              </Stack>
            }
          />
      
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; 