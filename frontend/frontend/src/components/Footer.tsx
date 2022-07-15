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
        gap="55px"
        fontSize="20px"
        alignItems="center"
        justifyContent="center"
        sx={{
          pl: 15
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