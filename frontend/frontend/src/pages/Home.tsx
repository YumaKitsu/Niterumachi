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
import Video from "../assets/video/home.mp4";

const Home = () => {
  let theme = createTheme({
    typography: {
      fontFamily: [
        'Hina Mincho'
      ].join(',')
    }
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Card>
          <CardMedia
            component="video"
            autoPlay
            loop
            muted
            src={Video}
            sx={{ 
              width: 'auto',
              minWidth: '100%', 
              height: '100%', 
              position: 'relative',
            }}
          />
        </Card>
        <Box
          sx={{
            height: "auto",
          }}
        >
          <Stack
            direction="column"
            spacing={{ md: 5, xs: 6 }}
            alignItems="center"
            alignSelf="center"
            sx={{
              p: 10,
              position: "absolute",
              minWidth: '80%',
              top: { xl: "45%", lg: "45%", xs: "42%" },
              left: { xl: "30%", lg: "35%", xs: "50%" },
              transform: "translate(-50%, -50%)",
            
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontFamily: "Yuji Syuku",
                color: "#FFFF",
                mb: 3
              }}
            >
              にてるまち
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontFamily: "Yuji Syuku ",
                letterSpacing: ".2rem",
                color: "#FFFF",
                fontWeight: 600,
              }}
            >
              〜帰省気分を味わう〜
            </Typography>

            <Typography
              mt={2}
              variant="h5"
              sx={{
                fontFamily: "Hina Mincho",
                color: "#FFFF",
                fontWeight: 700,
              }}
            >
              近場にあなたの故郷に似ている町があるかも...
            </Typography>

            <Stack alignItems="flex-start" alignSelf="center">
              <Link to="/search" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    p: "1.0rem",
                    width: 170,
                    fontSize: "1.2rem",
                    fontFamily: "Sawarabi Gothic",
                    color: "#FFFF",
                    bgcolor: "#ef6c00",
                    borderRadius: "15px",
                  }}
                >
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
