import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Location } from "history";
import { Grid, Button, Typography, CircularProgress, Stack, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Card from "../components/Card";





interface HotelInfo {
  hotelName: string;
  address1: string;
  address2: string;
  telephoneNo: string;
  access: string;
  hotelImageUrl: string;
  hotelInformationUrl: string;
}

interface Hotel {
  hotelBasicInfo: HotelInfo;
}

interface Hotels {
  hotel: Hotel[];
}

const Accommodations: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const location = useLocation();
  const navigate = useNavigate();
  const city = useMemo(() => {
    const state = location.state as { city: Location };

    if (state && state.city) {
      return state.city;
    }

    return undefined;
  }, [location]);
  const URL = `https://app.rakuten.co.jp/services/api/Travel/KeywordHotelSearch/20170426?format=json&keyword=${city}&applicationId=${process.env.REACT_APP_RAKUTEN_APP_ID}`;

  const [accommodationData, setAccommodationData] = useState<Hotels[]>([]);
  useEffect(() => {
    searchHotels();
  }, []);

  const searchHotels = async () => {
    try {
      setIsLoading(true)
      await axios.get(URL).then((res) => setAccommodationData(res.data.hotels));
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <Box  sx={{m: 'auto', p: '10px'}}>
    <Grid
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
    spacing={8}
    // sx={{ pl: { xl: 22, xs: 10 }, pr: { sm: 7 }, mt: 7 }}
    sx={{mt: 7}}
    >
      <Grid item alignItems="center" justifyContent="center">
        {isLoading && <CircularProgress />}
      </Grid>
      <Grid container item direction="column" sx={{ p: 3 }}>
        {!accommodationData.length ? (
          <Stack alignItems="center">
            <Typography variant="h4" sx={{ mt: 9 }}>
            宿泊施設が見つかりませんでした
            </Typography>
          </Stack>
          
          ) : (
            <React.Fragment>
            <Button
              variant="contained"
              onClick={() => {
                navigate(-1);
              }}
              sx={{ width: 185, fontSize: "1.4rem" }}
              >
              <ArrowBackIosIcon sx={{ color: "white" }} />
              戻る
            </Button>
            <Typography variant="h4" sx={{ mt: 9 }}>
              {accommodationData.length} 件の宿泊施設が見つかりました
            </Typography>
          </React.Fragment>
        )}
      </Grid>

      {accommodationData.map((data) => (
        <Grid
        key={data.hotel[0].hotelBasicInfo.hotelName}
        item
        md={4}
        sm={6}
        xs={12}
        sx={{ mb: 8 }}
        >
          <Card
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
      <Grid container item alignItems="center" justifyContent="center" sx={{ p: 10 }}>
        <Button
          variant="contained"
          onClick={() => {
            navigate(-1);
          }}
          sx={{ width: 185, fontSize: "1.4rem" }}
          >
          <ArrowBackIosIcon sx={{ color: "white" }} />
          戻る
        </Button>
      </Grid>
    </Grid>
</Box>
  );
};

export default Accommodations;
