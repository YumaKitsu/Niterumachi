import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Stack, Box, AppBar, Toolbar } from '@mui/material';

const Footer = () => {
  return (
    <Box>
    <AppBar position="relative" elevation={0} sx={{ backgroundColor: 'transparent' }}>
      <Toolbar>
        <Stack   
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{
          p:'10px',
          m: 'auto',
          gap: {xs: '45px', sm: '70px', md: '100px', lg: '150px', xl: '220px'},
          fontSize: {xs: '15px', sm: '20px'}
        }}>
        <NavLink to='/terms' style={{ textDecoration: 'none', fontFamily: 'Kosugi Maru', color: '#455a64' }}>利用規約</NavLink>
        <NavLink to="/privacy" style={{ textDecoration: 'none', fontFamily: 'Kosugi Maru', color: '#455a64' }}>プライバシーポリシー</NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
    </Box>
  
  )
}

export default Footer