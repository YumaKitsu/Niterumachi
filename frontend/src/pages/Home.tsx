import React from "react";
import { Grid, Typography, Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
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

        <Grid item xs={12} md={5} alignSelf="flex-start">
          <Stack direction="column" spacing={4}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              帰省気分を味わおう
            </Typography>
            <Typography variant="h5" sx={{ pt: 2 }}>
              なかなか地元に帰れない人々へ...
            </Typography>
            <Typography variant="h6" sx={{ lineHeight: '3rem' }}>
              このサービスは全国約1,900の市区町村を機械学習により分類。
              地元と似ている市区町村を見つけてくれるサービスです。
            </Typography>
            <Link to="/search">
              <Button
                variant="contained"
                size="large"
                color="primary"
                sx={{ p: "1.2rem",
                      fontSize: "1.1rem" 
                    }}>
               <SearchIcon />
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
