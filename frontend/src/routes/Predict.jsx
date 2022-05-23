import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Search from '../components/Search'

import SearchImage from "../assets/images/search_page_image.svg";

const Predict = () => {
  return (
    <Grid
      container
      sx={{
        margin: "auto",
        maxWidth: "100%",
        height: "auto",
        backgroundColor: 'secondary'
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={15}
        flexDirection="row-reverse"
        sx={{
          m: "1rem 3rem",
        }}
      >
        <Grid
          item
          xs={12}
          sm={7}
          alignSelf="center"
          sx={{
            pr: "1.5rem",
          }}
        >
          <Box
            component="img"
            sx={{
              maxWidth: "100%",
              height: "auto",
            }}
            alt="search-illustration"
            src={SearchImage}
          />
        </Grid>
        <Grid item xs={12} sm={5} alignSelf="center">
          <Typography variant="h1">Find</Typography>
          <Search />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Predict;
