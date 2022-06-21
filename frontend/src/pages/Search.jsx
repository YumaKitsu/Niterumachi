import React from "react";
import { Grid, Box, Typography, Stack } from "@mui/material";
import SearchField from "../components/SearchField";

import SearchImage from "../assets/images/search_page_image.png";

const Search = () => {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 8 }}
      columns={{ sm: 2, md: 4 }}
      justifyContent="center"
      alignItems="center"
      sx={{
        padding: "3.5rem",
        margin: "auto",
        maxWidth: "100%",
        height: "auto",
        backgroundColor: "secondary",
        flexDirection: "row-reverse",
      }}
    >
      <Grid container item sm={12} md={6}>
        <Grid item>
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "auto",
              margin: "auto",
            }}
            alt="search-illustration"
            src={SearchImage}
          />
        </Grid>
      </Grid>
      <Grid container item sm={12} md={6} flexDirection="column">
        <Box
          sx={{
            maxWidth: "100%",
            height: "auto",
            margin: "auto",
            padding: "0.5rem",
            borderRadius: "10px",
            boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
          }}
        >
          <Grid
            item
            container
            flexDirection="column"
            justifyContent="space-around"
            alignContent="center"
            maxWidth="100%"
            height="auto"
            sx={{ mt: 10 }}
          >
            <Typography
              sx={{ margin: "auto", pb: 3, fontWeight: 500 }}
              variant="h3"
            >
              市区町村を探す
            </Typography>
          </Grid>
          <SearchField />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Search;
