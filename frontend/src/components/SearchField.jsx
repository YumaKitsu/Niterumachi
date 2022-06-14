import React, { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { TextField, Grid, Button } from "@mui/material";
import StateContext from "../contexts/ContextProvider";
import Loading from "./Loading";

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
  const [error, setError] = useState(null);
  const [isSelected, setIsSelected] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    searchPref,
    changeHandler,
    prefData,
    setPrefData,
    results,
    setResults,
  } = useContext(StateContext);

  useEffect(() => {
    const fetchAllData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api/result");
      const data = await response.json();
      console.log(data.results);
      setPrefData(data.results);
    };
    fetchAllData();
  }, []);

  const getResults = async (data) => {
    try {
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
    } catch {
      const response = await fetch(
        `http://127.0.0.1:8000/api/result/?cluster=${data[0].cluster}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result.results);
    }
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
  }, [searchPref.prefOfOrigin, fetchPrefData]);

  const handleClick = () => {
    if (
      !searchPref.prefOfOrigin ||
      !searchPref.currentPref ||
      !searchPref.cityOfOrigin
    ) {
      return setIsSelected(false);
    } else {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(
            `http://127.0.0.1:8000/api/result/?pref=${searchPref.prefOfOrigin}&city=${searchPref.cityOfOrigin}`
          );
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          const data = await response.json();
          setPrefData(data.results);
          getResults(data.results);
          setError(null);
        } catch (err) {
          setError(err.message);
          setPrefData(null);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
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
      {isLoading && <Loading />}
      {!isSelected && (
        <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
          variant="standard"
        />
      )}
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
          name="cityOfOrigin"
          sx={{ width: 300 }}
          onChange={changeHandler}
          SelectProps={{
            native: true,
          }}
        >
          {selectedCities.map((prefObj) => (
            <option key={prefObj.id}>
              {prefObj.city} {prefObj.ward}
            </option>
          ))}
        </TextField>
      </Grid>

      <Grid item alignSelf="center">
        <TextField
          select
          id="current-prefecture"
          name="currentPref"
          onChange={changeHandler}
          SelectProps={{
            native: true,
          }}
          sx={{
            width: 300,
          }}
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
        <Link to="/results">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick}
            sx={{ p: "1rem" }}
          >
            Search
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default SearchField;
