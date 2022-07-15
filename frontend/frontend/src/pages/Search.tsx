import React from "react";
import { Box, Card, CardMedia } from "@mui/material";
import SearchField from "../components/SearchField";
import Image from "../assets/images/image.jpg"




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

  );
};

export default Search;
