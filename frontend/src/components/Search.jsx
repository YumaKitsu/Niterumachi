import React, { useState, useEffect } from "react";
import { TextField, Grid, Typography, Button } from "@mui/material";

const PREFECTURES = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

const Search = () => {
  const [prefData, setPrefData] = useState([]);
  const [searchPref, setSearchPref] = useState({
    prefOfOrigin: "",
    cityOfOrigin: "",
    currentPref: "",
  });

  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const api = await fetch("http://127.0.0.1:8000/api/result");
    const data = await api.json();
    setPrefData(data.results);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSearchPref((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSelectedCities(() => {
      return prefData.filter((prefObj) => prefObj.prefecture === value)
    }
    );
    e.preventDefault();
  };

  const clickHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `http://127.0.0.1:8000/api/result/?search=${searchPref.currentPref}`
    );
    const data = await api.json();
    setPrefData(data.results);
    console.log(prefData);
  };

  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-around"
      maxWidth="100%"
      height="auto"
      sx={{
        width: 610,
        height: 445,
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#fafafa",
      }}
    >
      <Grid item alignSelf="center">
        <Typography variant="h4" fontWeight="bold">
          似ている市町村を探す
        </Typography>
      </Grid>

      <Grid item alignSelf="center">
        <TextField
          select
          id="origin-of-prefecture"
          name="prefOfOrigin"
          onChange={changeHandler}
          SelectProps={{
            native: true,
          }}
          sx={{ width: 300 }}
        >
          {PREFECTURES.map((pref) => (
            <option key={pref} value={pref}>
              {pref}
            </option>
          ))}
          ;
        </TextField>
      </Grid>

      <Grid item alignSelf="center">
        <TextField
          select
          id="origin-of-city"
          label="◯◯市/町/村"
          name="cityOfOrigin"
          sx={{ width: 300 }}
          SelectProps={{
            native: true,
          }}
        >
          {selectedCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </TextField>
      </Grid>

      <Grid item alignSelf="center">
        <TextField
          select
          id="current-prefecture"
          name="currentPref"
          SelectProps={{
            native: true,
          }}
          sx={{ width: 300 }}
        >
          {PREFECTURES.map((pref) => (
            <option key={pref} value={pref}>
              {pref}
            </option>
          ))}
          ;
        </TextField>
      </Grid>
      <Grid item alignSelf="center">
        <Button variant="contained" color="primary" onClick={clickHandler}>
          探す
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
