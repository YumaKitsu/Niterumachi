import React from 'react';
import { NavLink } from 'react-router-dom';
import { Stack, Box, AppBar, Toolbar } from '@mui/material';


const Navbar = () => (
  <Box sx={{ flexGrow: 1 }}>
  <AppBar position="fixed" sx={{ backgroundColor: '#FFFF' }}>
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
      <NavLink to='/' style={{ textDecoration: 'none' }}>Home</NavLink>
      <a href="/search" style={{ textDecoration: 'none' }}>検索</a>
      </Stack>
    </Toolbar>
  </AppBar>
</Box>
);

export default Navbar;