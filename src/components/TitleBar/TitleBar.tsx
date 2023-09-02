import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import "./title-bar.scss";
const TitleBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" className="title">
          <Link to={"/"}>
            <span>
              Intelygenz - Lector RSS <RssFeedRoundedIcon />
            </span>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
