import { Link, useLocation } from "react-router-dom";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import parse from "html-react-parser";
import "./art-detail.scss";

const ArtDetail = () => {
  const location = useLocation();
  const { item } = location.state;
  const isMobile = useMediaQuery("(max-width:768px)");

  //remove all styling from the html string
  const stringNoStyle = item?.desc.replace(/style="(.*?)" /g, "");
  //then parse into html
  const cleanHtml = parse(stringNoStyle || "");

  return (
    <Grid container justifyContent="center" className="main-container">
      <Grid item md={6} xs={12} className="main-container__inner">
        <Grid item xs={12}>
          <Typography variant={isMobile ? "h5" : "h4"} m={2} pb={1}>
            {item?.title}
          </Typography>
        </Grid>
        <Typography data-testid="content">{cleanHtml}</Typography>
        <div className="main-container__inner__icon">
          <Link to="/" data-testid="return-link">
            <ArrowBackIos />
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default ArtDetail;
