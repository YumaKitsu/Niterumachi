import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Stack, Box, AppBar, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="relative" elevation={0} sx={{ backgroundColor: 'transparent' }}>
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
        <NavLink to='/terms' style={{ textDecoration: 'none', fontFamily: 'Kosugi Maru', color: '#eeeeee' }}>利用規約</NavLink>
        <NavLink to="/privacy" style={{ textDecoration: 'none', fontFamily: 'Kosugi Maru', color: '#eeeeee' }}>プライバシーポリシー</NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
    </Box>
  
  )
}

export default Footer