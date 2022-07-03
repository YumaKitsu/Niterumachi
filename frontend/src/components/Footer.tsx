import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

const Footer = () => {
  return (
    <Stack direction="row" sx={{ gap: { sm: '100px', xs: '40px' }, mt: { sm: '72px', xs: '20px' }, mb: { xs: 4 }, justifyContent: 'center' }} px="20px">
    <Stack
      direction="row"
      gap="170px"
      fontSize="18px"
      alignItems="center"
      justifyContent="center"
    >
      <Link to="/terms" style={{ textDecoration: 'none', color: "#8D8DAA" }}>利用規約</Link>
      <a href="/privacy" style={{ textDecoration: 'none', color: "#8D8DAA" }}>プライバシーポリシー</a>
    </Stack>
  </Stack>
  )
}

export default Footer