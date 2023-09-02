import React from "react";
import { IconButton } from "@mui/material";
import AbcIcon from "@mui/icons-material/Abc";
import DateRangeIcon from "@mui/icons-material/DateRange";
import "./options-button.scss";

const OptionButtons = ({ setOrder, setOrderType }) => {
  return (
    <>
      <div className="order-group">
        <IconButton children={<AbcIcon />} onClick={() => setOrder("abc")} />
        <IconButton
          children={<DateRangeIcon />}
          onClick={() => setOrder("date")}
        />
      </div>
    </>
  );
};

export default OptionButtons;
