import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import StateContext from "../contexts/ContextProvider";

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

const SearchField = () => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  
  const {
    searchPref,
    changeHandler,
    prefData,
    setPrefData,
    results,
    setResults,
    queryPref,
    setQueryPref
  } = useContext(StateContext);

  useEffect(() => {
    const fetchAllData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/result");
      const data = await response.json();
      setPrefData(data.results);
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    if (
      searchPref.prefOfOrigin &&
      searchPref.cityOfOrigin &&
      searchPref.currentPref
    ) {
      setIsSelected(true);
    }
  }, [searchPref]);

  const getResults = async (data) => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/result/?pref=${searchPref.currentPref}&cluster=${data[0].cluster}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const result = await response.json();
      setResults(result.results);
  };

  const fetchPrefData = useCallback(() => {
    const filterPrefObj = (obj) => {
      if (Object.values(obj)[1] === searchPref.prefOfOrigin) {
        return true;
      }
      return false;
    };
    let newArray = prefData.filter(filterPrefObj);
    setSelectedCities(newArray);
  }, [searchPref.prefOfOrigin, prefData]);

  useEffect(() => {
    fetchPrefData();
  }, [searchPref.prefOfOrigin]);

  const handleClick = () => {
    const fetchData = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/result/?pref=${searchPref.prefOfOrigin}&city=${searchPref.cityOfOrigin}`
      );
      const data = await response.json();
      const result = await data.results;
      getResults(result);
      setQueryPref(result);
    };
    fetchData();
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
      }}
    >
      <Grid item alignSelf="center">
        <FormControl required>
          <InputLabel id="origin-of-prefecture">出身の都道府県</InputLabel>
          <Select
            id="origin-of-prefecture"
            name="prefOfOrigin"
            value={searchPref.prefOfOrigin}
            label="出身の都道府県"
            onChange={changeHandler}
            sx={{ width: 300 }}
          >
            {PREFECTURES.map((pref) => (
              <MenuItem key={pref} value={pref}>
                {pref}
              </MenuItem>
            ))}
            ;
          </Select>
        </FormControl>
      </Grid>

      <Grid item alignSelf="center">
        <FormControl required>
          <InputLabel id="origin-of-city">出身の市区町村</InputLabel>
          <Select
            id="origin-of-city"
            name="cityOfOrigin"
            value={searchPref.cityOfOrigin}
            label="出身の市区町村"
            onChange={changeHandler}
            sx={{ width: 300 }}
          >
            {selectedCities.map((prefObj) => (
              <MenuItem key={prefObj.id} value={prefObj.city}>
                {prefObj.city} {prefObj.ward}
              </MenuItem>
            ))}
            ;
          </Select>
        </FormControl>
      </Grid>

      <Grid item alignSelf="center">
        <FormControl required>
          <InputLabel id="current-prefecture">
            現在住んでいる都道府県
          </InputLabel>
          <Select
            id="current-prefecture"
            name="currentPref"
            value={searchPref.currentPref}
            label="出身の都道府県"
            onChange={changeHandler}
            sx={{ width: 300 }}
          >
            {PREFECTURES.map((eachPref) => (
              <MenuItem key={eachPref} value={eachPref}>
                {eachPref}
              </MenuItem>
            ))}
            ;
          </Select>
        </FormControl>
      </Grid>
      <Grid item alignSelf="center">
        {isSelected ? (
          <Link to="/results">
            <Button
              variant="contained"
              color="primary"
              onClick={handleClick}
              sx={{
                p: "1rem",
                maxWidth: 300,
                minWidth: 300,
                maxHeight: 56,
                minHeight: 56,
                fontSize: 18,
              }}
            >
            <SearchIcon sx={{ mr: 0.7 }}/>
              探す
            </Button>
          </Link>
        ) : (
          <Button
            disabled
            variant="contained"
            color="primary"
            size="large"
            sx={{
              p: "1rem",
              maxWidth: 300,
              minWidth: 300,
              maxHeight: 56,
              minHeight: 56,
              fontSize: 18,
            }}
          >
          <SearchIcon sx={{ mr: 0.7 }}/>
            探す
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
export default SearchField;
