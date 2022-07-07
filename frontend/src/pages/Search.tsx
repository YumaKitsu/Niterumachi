import React from "react";
import { Grid, Box, Typography, Card, CardMedia } from "@mui/material";
import SearchField from "../components/SearchField";
import Image from "../assets/images/search-page-image.jpg";

const Search = () => {
  return (

    <Box sx={{ height: '100%', position: 'relative' }}>
      <Card  sx={{ maxWidth: "100%", maxHeight: "100%" }}>
        <CardMedia 
          component="img"
          alt="search-page-image"
          height="950"
          width="100%"
          image={Image}
          sx={{ backgroundSize: 'cover' }}
          
          />
      </Card>

      <Box
          sx={{
            maxWidth: "100%",
            height: "auto",
            margin: "auto",
            borderRadius: "10px",
            boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#FFFF'
          }}
        >
  
          <SearchField />
        </Box>

    </Box>








    // <Box>
    // <Grid
    //   container
    //   spacing={{ xs: 4, md: 8 }}
    //   columns={{ sm: 2, md: 4 }}
    //   justifyContent="center"
    //   alignItems="center"
    //   sx={{
    //     p: "3.5rem",
    //     pt: 14,
    //     margin: "auto",
    //     maxWidth: "100%",
    //     height: "auto",
    //     backgroundColor: "secondary",
    //     flexDirection: "row-reverse",
    //   }}
    // >
    //   <Grid container item sm={12} md={6}>
    //     <Grid item>
    //       <Box
    //         component="img"
    //         sx={{
    //           maxWidth: "100%",
    //           height: "auto",
    //         }}
    //         alt="search-illustration"
    //         src={SearchImage}
    //       />
    //     </Grid>
    //   </Grid>
    //   <Grid container item sm={12} md={6} flexDirection="column">
    //     <Box
    //       sx={{
    //         maxWidth: "100%",
    //         height: "auto",
    //         margin: "5rem auto",
    //         padding: "0.5rem",
    //         borderRadius: "10px",
    //         boxShadow: "rgb(0 0 0 / 12%) 0px 6px 16px",
    //       }}
    //     >
    //       <Grid
    //         item
    //         container
    //         flexDirection="column"
    //         justifyContent="space-around"
    //         alignContent="center"
    //         maxWidth="100%"
    //         height="auto"
    //         sx={{ mt: 10 }}
    //       >
    //         <Typography
    //           sx={{ margin: "auto", pb: 3, fontWeight: 600, fontSize: '2.7rem', fontFamily: "Sawarabi Gothic" }}
    //         >
    //           市区町村を探す
    //         </Typography>
    //       </Grid>
    //       <SearchField />
    //     </Box>
    //   </Grid>
    // </Grid>
    // </Box>
  );
};

export default Search;
