import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Box, AppBar, Toolbar } from '@mui/material';


const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'inherit' }}>
    <Toolbar>
      <Stack   
      direction="row"
      gap="65px"
      fontSize="23px"
      alignItems="center"
      justifyContent="center"
      sx={{
        pl: 15
      }}>
      <NavLink to='/' style={{ textDecoration: 'none', fontFamily: 'Kosugi Maru', color: '#eeeeee' }}>ホーム</NavLink>
      <a href="/search" style={{ textDecoration: 'none', fontFamily: 'Kosugi Maru', color: '#eeeeee' }}>探す</a>
      </Stack>
    </Toolbar>
  </AppBar>
  </Box>
);

export default Navbar;