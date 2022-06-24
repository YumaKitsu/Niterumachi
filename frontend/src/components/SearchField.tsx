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
import SearchIcon from "@mui/icons-material/Search";
import PrefData from "../models/prefData";
import SearchContext from "../contexts/SearchContext";
import APIContext from "../contexts/APIContext";
import { prettyFormat } from "@testing-library/react";

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
  const { searchPref, selectPref } = useContext(SearchContext);
  const { allData, results, getResults, getClusterOfPref } =
    useContext(APIContext);

  useEffect(() => {
    getResults();
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

  useCallback(() => {
    selectCity();
  }, [searchPref.prefOfOrigin]);

  useEffect(() => {
    selectCity();
  }, [searchPref.prefOfOrigin]);

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
    console.log(cluster);
    
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

      <Grid item alignSelf="center">
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
              <MenuItem>都道府県を選んで下さい</MenuItem>
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

      <Grid item alignSelf="center">
        <FormControl required>
          <InputLabel id="current-prefecture">現在お住みの都道府県</InputLabel>
          <Select
            id="current-prefecture"
            name="currentPref"
            value={searchPref.currentPref}
            label="出身の都道府県"
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
