import React, { useState, useContext } from "react";
import {
  Link as MuiLink,
  Typography,
  Stack,
  Button,
  TableContainer,
  Table,
  TableBody,
  Paper,
  TableHead,
  TableCell,
  TableRow,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { Link } from "react-router-dom";
import StateContext from "../contexts/ContextProvider";
import ResultModal from "../components/ResultModal";

const Results = () => {
  const { results, setResults, searchPref, setSearchPref, queryPref } =
    useContext(StateContext);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleClick = () => {
    setSearchPref({
      prefOfOrigin: "",
      cityOfOrigin: "",
      currentPref: "",
    });

    setResults([]);
  };

  const anotherHandleClick = () => {
    const getData = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/api/result/?cluster=${queryPref[0].cluster}`
      );
      const data = await response.json();
      const results = await data.results;
      setResults(results);
      setSearchPref((prevData) => ({
        ...prevData,
        currentPref: "全国",
      }));
    };
    getData();
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
        <Typography variant="h3" sx={{ fontFamily: "Yuji Syuku" }}>
          {searchPref.prefOfOrigin} {searchPref.cityOfOrigin}
        </Typography>
        <Typography variant="h6">
          {searchPref.currentPref} で似ている地域は...
        </Typography>
        {!results.length && (
          <Stack direction="column" sx={{ padding: "30px" }} spacing={8}>
            <Typography variant="h4">検索結果が見つかりませんでした</Typography>
            <MuiLink
              component="button"
              onClick={anotherHandleClick}
              sx={{ fontSize: '1.5rem' }}
            >
              全国で調べる
            </MuiLink>
          </Stack>
        )}
      </Stack>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>都道府県</TableCell>
              <TableCell style={{ width: 160 }}>統計情報</TableCell>
              <TableCell style={{ width: 160, paddingRight: 70 }} align="right">宿泊地</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((data) => (
                <TableRow key={data.id}>
                  <TableCell component="th" scope="row">
                    {data.prefecture} {data.city} {data.ward && data.ward}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
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
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    <Link
                      className="router-link"
                      to="/travel"
                      state={{ city: data.city }}
                      style={{
                        fontSize: "1rem",
                        color: "#4D77FF",
                        textDecorationColor: "rgba(77, 119, 255, 0.4)",
                      }}
                    >
                      宿泊地を見る
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              count={results.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>

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
