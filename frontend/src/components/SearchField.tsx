import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PrefData from "../models/prefData";
import SearchContext from "../contexts/SearchContext";
import APIContext from "../contexts/APIContext";


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
  const [selectedCities, setSelectedCities] = useState<PrefData[]>([]);
  const [isSelected, setIsSelected] = useState(false);
  const { searchPref, selectPref, initializeSelectedData } = useContext(SearchContext);
  const { allData, results, getResults, getClusterOfPref } =
    useContext(APIContext);

  useEffect(() => {
    setSelectedCities([])
    getResults();
  }, []);

  const checkIsSelected = () => {
    if (
      searchPref.prefOfOrigin &&
      searchPref.cityOfOrigin &&
      searchPref.currentPref
    ) {
      setIsSelected(true);
    } else {
      setIsSelected(false)
    }
  }

  useEffect(() => {
   checkIsSelected(); 
  }, [searchPref]);

  useCallback(() => {
    selectCity();
  }, [searchPref]);


  useEffect(() => {
    selectCity();
  }, [searchPref]);


  const selectCity = useCallback(() => {
    const filterPrefObj = (obj: PrefData) => {
      if (Object.values(obj)[1] === searchPref.prefOfOrigin) {
        return true;
      }
      return false;
    };
    const selectedData = allData.filter(filterPrefObj);
    setSelectedCities(selectedData);
  }, [searchPref.prefOfOrigin]);

  const handleClick = () => {
    let cluster = getClusterOfPref();
    let prefecture = searchPref.currentPref;
    getResults(cluster, prefecture);
  };



  return (
    <Grid
      container
      flexDirection="column"
      justifyContent="space-around"
      maxWidth="100%"
      height="auto"
      sx={{
        height: 600,
        padding: "30px",
      }}
    >
      <Grid item alignSelf="center" sx={{ p: 2 }}>
        <Typography mb={1}>
            出身の都道府県は？
          </Typography>
        <FormControl required> 
          <InputLabel id="pref-origin">出身の都道府県</InputLabel>
          <Select
            name="prefOfOrigin"
            value={searchPref.prefOfOrigin}
            id="pref-origin"
            label="出身の都道府県"
            onChange={selectPref}
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

      <Grid item alignSelf="center" sx={{ p: 2 }} >
      <Typography mb={1}>
            出身の市区町村は？
          </Typography>
        <FormControl required>
          <InputLabel id="origin-of-city">出身の市区町村</InputLabel>
          <Select
            id="origin-of-city"
            name="cityOfOrigin"
            value={searchPref.cityOfOrigin}
            label="出身の市区町村"
            onChange={selectPref}
            sx={{ width: 300 }}
          >
            {!searchPref.prefOfOrigin ? (
              <MenuItem data-testid="option-list">都道府県を選んで下さい</MenuItem>
            ) : (
              selectedCities.map((prefObj) =>
                prefObj.ward ? (
                  <MenuItem
                    key={prefObj.id}
                    value={prefObj.city + prefObj.ward}
                  >
                    {prefObj.city} {prefObj.ward}
                  </MenuItem>
                ) : (
                  <MenuItem key={prefObj.id} value={prefObj.city}>
                    {prefObj.city} {prefObj.ward}
                  </MenuItem>
                )
              )
            )}
            ;
          </Select>
        </FormControl>
      </Grid>

      <Grid item alignSelf="center" sx={{ p: 2 }}>
      <Typography mb={1}>
            現在住んでいる都道府県は？
          </Typography>
        <FormControl required>
          <InputLabel id="current-pref">現在お住みの都道府県</InputLabel>
          <Select
            id="current-pref"
            name="currentPref"
            value={searchPref.currentPref}
            label="現在お住みの都道府県"
            onChange={selectPref}
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
          <Link to="/results" style={{ textDecoration: 'none' }}>
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
              <SearchIcon sx={{ mr: 0.7 }} />
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
            <SearchIcon sx={{ mr: 0.7 }} />
            探す
          </Button>
        )}
      </Grid>
    </Grid>
  );
};
export default SearchField;
