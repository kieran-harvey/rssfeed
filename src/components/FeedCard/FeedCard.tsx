import { FeedCardProps } from "../types";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./feed-card.scss";

const FeedCard = ({ item }: FeedCardProps) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <Card className="feed-card-container" data-testid="feed-card-container">
      <CardContent>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8}>
            {isMobile && (
              <Grid item md={4} xs={12}>
                <Grid item xs={12}>
                  <CardMedia
                    component="img"
                    image={item.img || ""}
                    alt="img"
                    sx={{ border: "1px solid black" }}
                  />
                </Grid>
              </Grid>
            )}
            <Grid item xs={12}>
              <Typography variant="h5" mb={2}>
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Typography variant="body1">{item.shortDesc}</Typography>
            </Grid>
            <Grid item xs={12} textAlign="left" pb={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="caption">{item.author}</Typography>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography variant="caption">
                  {item.pubDate.toDateString()}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              m={"auto"}
              p={0.5}
              className="feed-card-container__top-border"
            >
              <Link to={`/${item.id}`} state={{ item }}>
                Leer más...
              </Link>
            </Grid>
          </Grid>
          {!isMobile && (
            <Grid item md={4} xs={12}>
              <Grid item xs={12} ml={1}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img || ""}
                  alt="img"
                  sx={{ border: "1px solid black" }}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
