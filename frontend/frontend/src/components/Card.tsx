import React from "react";
import { Card as MuiCard, CardContent, CardMedia, Typography, Link, Stack } from "@mui/material";
import HotelData from "../models/hotelData";


const Card = (props: HotelData) => {
  return (
    <MuiCard sx={{ maxWidth: '100%', minHeight: 550, width: 400, height: 'auto'}}>
      <CardMedia
        component="img"
        height="500"
        src={props.image}
        alt="accommodation-image"
        style={{ height: "300px", maxWidth: "auto", paddingTop: "2%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {props.name}
        </Typography>
        <Stack direction='column' spacing={1} sx={{ mt: 5 }}>
        <Typography variant="body2" color="text.secondary">
          {props.prefecture} {props.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.access}
        </Typography>
        <Link href={props.informationUrl} variant="body2">
          {props.informationUrl}
        </Link>
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
