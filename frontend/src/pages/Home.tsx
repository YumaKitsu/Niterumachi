import React from "react";
import {
  Typography,
  Box,
  Button,
  Stack,
  Card,
  CardMedia,
} from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { Link, Outlet } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Image from "../assets/images/home-image.jpg";
import Video from "../assets/video/video0.mp4";

const Home = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);


  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Card sx={{ width: "100%", height: "auto", position: 'relative' }}>
          <CardMedia
            component="img"
            alt="homepage-image"
            height="920"
            width="600"
            image={Image}
            sx={{ opacity: 0.9 }}
          />
        </Card>


        <Box sx={{ width: '500', height: '700', backgroundColor: 'rgba(38,50,56,0.5)' }}>

        <Stack
          direction='column'
          spacing={{ lg: 10, md: 7, xs: 3 }}
          alignItems="base-line" 
          alignSelf="center"
          sx={{ 
            p: 10,
            position: 'absolute', 
            top: { xl: '42%', lg: '48%', xs: '46%' },
            left: {xl: '38%', lg: '40%', xs: '50%'},
            transform: 'translate(-50%, -50%)',
          }}>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontFamily: "Hina Mincho",
              color: "#311b92",
            }}
          >
            にてるまち
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontFamily: "Hina Mincho",
              letterSpacing: ".2rem",
              color: "#5e35b",
              fontWeight: 700,
            }}
          >
            〜帰省気分を味わう〜
          </Typography>


          <Typography 
              mt={2} 
              variant="h4" 
              sx={{ 
                fontFamily: "Hina Mincho", 
                color: '#5e35b', 
                fontWeight: 700,
                backgroundColor: 'rgba(132,255,255,0.3)'
               }}>
              近場にあなたの故郷に似ている町があるかも...
            </Typography>
          

            <Stack alignItems="flex-start"  alignSelf="center">
              <Link to="/search" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    p: "1.0rem",
                    width: 170,
                    fontSize: "1.2rem",
                    fontFamily: "Sawarabi Gothic",
                    color: '#FFFF',
                    bgcolor: '#ef6c00',
                    borderRadius: '15px',
                  }}>
                  <SearchIcon />
                  検索画面へ
                </Button>
              </Link>
            </Stack>
  

        </Stack>
        </Box>
      </Box>
      <Outlet />
    </ThemeProvider>
  );
};

export default Home;
