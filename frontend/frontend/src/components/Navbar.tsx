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
              gap="65px"
              fontSize="20px"
              alignItems="center"
              justifyContent="center"
              sx={{
                pl: 15,
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
