import React from "react";
import { Typography, Grid } from "@mui/material";
import Search from "../components/Search";
import image from "../assets/images/background-image.jpg";

const Home = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item xs={12} sm={6} alignSelf="base-line">
          <Grid
            container
            flexDirection="column"
            justifyContent="flex-start"
            maxWidth="100%"
            height="auto"
            sx={{
              width: 610,
              height: 445,
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            <Typography variant="h2" color="white" fontWeight="bold">
              帰省気分を味わおう
            </Typography>
            <Typography variant="h6" color="white">
              地元に帰りたくても帰れない人々へ
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Search />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
