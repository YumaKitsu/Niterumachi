import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';


const Navbar = () => (
  <Stack direction="row" sx={{ gap: { sm: '150px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'center' }} px="20px">

    <Stack
      direction="row"
      gap="40px"
      fontSize="24px"
      alignItems="center"
      justifyContent="center"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="/search" style={{ textDecoration: 'none', color: '#3A1212' }}>検索</a>
    </Stack>
  </Stack>
);

export default Navbar;