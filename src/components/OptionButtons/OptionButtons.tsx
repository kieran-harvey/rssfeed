import React, { useState } from "react";
import { IconButton, Grid } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import DateRangeIcon from "@mui/icons-material/DateRange";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import "./options-button.scss";

const OptionButtons = ({ setOrder, setOrderType, order, orderType }) => {
  return (
    <Grid item xs={12}>
      <div className="order-group">
        <div className="order-group__icon-group">
          <IconButton
            children={<AbcIcon />}
            onClick={() => setOrder("abc")}
            className={order === "abc" ? "selected" : ""}
          />
          <IconButton
            children={<DateRangeIcon />}
            onClick={() => setOrder("date")}
            className={order === "date" ? "selected" : ""}
          />
        </div>
        <div className="order-group__icon-group">
          <IconButton
            children={<NorthIcon />}
            onClick={() => setOrderType("asc")}
            className={orderType === "asc" ? "selected" : ""}
          />
          <IconButton
            children={<SouthIcon />}
            onClick={() => setOrderType("desc")}
            className={orderType === "desc" ? "selected" : ""}
          />
        </div>
      </div>
    </Grid>
  );
};

export default OptionButtons;
