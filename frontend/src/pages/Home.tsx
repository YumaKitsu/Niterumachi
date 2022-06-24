import React from "react";
import { Grid, Typography, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

import Illustration from "../assets/images/homepage_image.svg";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        margin: "auto",
        maxWidth: "100%",
        height: "auto",
      }}
    >
      <Grid
        container
        justifyContent="center"
        spacing={15}
        flexDirection="row-reverse"
        sx={{
          margin: "4rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={7}
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
            alt="illustration"
            src={Illustration}
          />
        </Grid>

        <Grid item xs={12} md={5} alignSelf="flex-start" spacing={2}>
          <Stack direction="column" spacing={4}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              帰省気分を味わおう
            </Typography>
            <Link to="/search">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ p: "1rem" }}
              >
                検索画面へ
              </Button>
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
