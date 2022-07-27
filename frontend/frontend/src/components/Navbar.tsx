import React from "react";
import { NavLink } from "react-router-dom";
import { Stack, Box, AppBar, Toolbar } from "@mui/material";


const Navbar = () => {

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ backgroundColor: "#f5f5f5" }}
        >
          <Toolbar>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{
                p:'10px',
                m: 'auto',
                gap: {xs: '45px', sm: '70px', md: '100px', lg: '150px', xl: '220px'},
                fontSize: {xs: '16px', sm: '20px'}
              }}
            >
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  fontFamily: "Kosugi Maru",
                  color: "#212121",
                }}
              >
                ホーム
              </NavLink>
              <a
                href="/search"
                style={{
                  textDecoration: "none",
                  fontFamily: "Kosugi Maru",
                  color: "#212121",
                }}
              >
                探す
              </a>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
  );
};

export default Navbar;
