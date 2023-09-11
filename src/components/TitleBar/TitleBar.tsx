import { AppBar, Toolbar, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import RssFeedRoundedIcon from "@mui/icons-material/RssFeedRounded";
import "./title-bar.scss";

const TitleBar = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant={!isMobile ? "h4" : "h6"}
          component="div"
          className="title"
        >
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
