import React, { useContext } from "react";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import StateContext from "../contexts/ContextProvider";

const Results = () => {
  const { results, setResults, searchPref, setSearchPref } = useContext(StateContext);
  
  const handleClick = () => {
    setSearchPref({
      prefOfOrigin: '',
      cityOfOrigin: '',
      currentPref: '',
    });

    setResults([]);
  }

  return (
    <Grid container flexDirection="column" alignItems="center" spacing={6}>
      <Grid item>
        {!results.length && <h1>検索結果が見つかりませんでした</h1>}
      </Grid>
      <Grid item>
        <List sx={{ width: "100%" }}>
        <Typography variant="h5">
          {searchPref.currentPref}の似ている市区町村
        </Typography>
          {results.map((data) => (
            <ListItem button key={data.id}>
              {data.prefecture} {data.city} {data.ward && data.ward}
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item>
        <Link to="/search">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleClick}
            sx={{ p: "1rem" }}
          >
            Back
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Results;
