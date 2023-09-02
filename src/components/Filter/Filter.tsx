import React from "react";
import { Grid, TextField } from "@mui/material";

const Filter = ({ setFilter }) => {
  return (
    <Grid container m={2} pt={1} justifyContent="flex-end">
      <Grid item xs={3}>
        <TextField
          id="filter"
          label="Filtrar"
          variant="standard"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFilter(e.target.value);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
