import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Grid } from "@mui/material";
import Card from "../components/Card";

const Accommodation = () => {
  const location = useLocation();
  const { city } = location.state;
  const [accommodationData, setAccommodationData] = useState([]);
  const ID = "1079824922217656178";
  const URL = `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json
             &keyword=${city}&applicationId=${ID}`;

  const getData = async () => {
    const response = await fetch(URL);
    const results = await response.json();
    console.log(results.hotels);
    setAccommodationData(results.hotels);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="space-evenly" spacing={8} sx={{ pl: {lg: 22, xs: 8}, mt: 12, pr: { xs: 5 } }} >
      {accommodationData.map((data) => (
        <Grid item sm={6} xs={12} md={4} sx={{ mb: 8}}>
          <Card
            key={data.hotel[0].hotelBasicInfo.hotelName}
            name={data.hotel[0].hotelBasicInfo.hotelName}
            prefecture={data.hotel[0].hotelBasicInfo.address1}
            city={data.hotel[0].hotelBasicInfo.address2}
            phone={data.hotel[0].hotelBasicInfo.telephoneNo}
            access={data.hotel[0].hotelBasicInfo.access}
            image={data.hotel[0].hotelBasicInfo.hotelImageUrl}
            informationUrl={data.hotel[0].hotelBasicInfo.hotelInformationUrl}
          />
        </Grid>
      ))}
    
    </Grid>
  );
};

export default Accommodation;
