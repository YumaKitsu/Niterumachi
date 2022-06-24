import React, { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Location } from "history";
import { Grid } from "@mui/material";
import Card from "../components/Card";

interface HotelInfo {
  hotelName: string;
  address1: string;
  address2: string;
  telephoneNo: string;
  access: string;
  hotelImageUrl: string;
  hotelInformationUrl: string;
};

interface Hotel {
  hotelBasicInfo: HotelInfo;
};

interface Hotels {
  hotel: Hotel[];
};

const Accommodations: React.FC = () => {
  const location = useLocation();
  const city = useMemo(() => {
    const state = location.state as { city: Location };

    if (state && state.city) {
      return state.city;
    }

    return undefined;
  }, [location]);
  const URL = `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${city}&applicationId=${process.env.REACT_APP_MY_ID}`;

  const [accommodationData, setAccommodationData] = useState<Hotels[]>([]);
  useEffect(() => {
    searchHotels();
  }, []);

  const searchHotels = async () => {
    const response = await fetch(URL);
    const results = await response.json();
    console.log(results.hotels);
    setAccommodationData(results.hotels);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="space-evenly"
      spacing={8}
      sx={{ pl: { xl: 22, xs: 10 }, pr: { sm: 7 }, mt: 12 }}
    >
      {accommodationData.map((data) => (
        <Grid item md={4} sm={6} xs={12} sx={{ mb: 8 }}>
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

export default Accommodations;
