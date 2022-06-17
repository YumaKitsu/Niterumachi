import React, { useContext } from "react";
import { Typography, Stack, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import StateContext from "../contexts/ContextProvider";
import ResultModal from "../components/ResultModal";

const Results = () => {
  const { results, setResults, searchPref, setSearchPref, isSelected } =
    useContext(StateContext);

  const handleClick = () => {
    setSearchPref({
      prefOfOrigin: "",
      cityOfOrigin: "",
      currentPref: "",
    });

    setResults([]);
  };

  return (

    <Stack
      spacing={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ gap: { lg: "35px", xs: "20px" }, m: 10 }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={4}
      >
        <Typography variant="h4">
          あなたの出身地は　{searchPref.prefOfOrigin} {searchPref.cityOfOrigin}
        </Typography>
        <Typography variant="h5">
          {searchPref.currentPref} で似ている地域は...
        </Typography>
        {!results.length && (
        <Stack sx={{ padding: '30px' }}>
          <Typography variant="h4">検索結果が見つかりませんでした</Typography>
        </Stack>

      )}
      </Stack>
      {results.map((data) => (
        <Box
          component="span"
          sx={{
            width: "400px",
            height: "auto",
            p: "1.5rem",
            borderRadius: "10px",
            boxShadow: "0 0.5px 1.5px 1px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={6}
          >
            <Typography variant="h6" key={data.id}>
              {data.prefecture} {data.city} {data.ward && data.ward}
            </Typography>
            <ResultModal
              prefecture={data.prefecture}
              city={data.city}
              ward={data.ward}
              total_population={data.total_population}
              those_under_15={data.those_under_15}
              those_between_15_and_64={data.those_between_15_and_64}
              those_over_65={data.those_over_65}
              kinder_gardens={data.kinder_gardens}
              elementary_schools={data.elementary_schools}
              junior_high_schools={data.junior_high_schools}
              high_schools={data.high_schools}
              hospitals={data.hospitals}
              population_trends={data.population_trends}
              move_in_ratio={data.move_in_ratio}
              move_out_ratio={data.move_out_ratio}
              primary_industry_ratio={data.primary_industry_ratio}
              secondary_industry_ratio={data.secondary_industry_ratio}
              tertiary_industry_ratio={data.tertiary_industry_ratio}
            />
          </Stack>
        </Box>
      ))}
      <Link to="/search">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleClick}
          sx={{ p: "1rem" }}
        >
          検索画面に戻る
        </Button>
      </Link>
    </Stack>
  );
};

export default Results;
