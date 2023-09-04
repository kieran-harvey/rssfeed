import { FeedCardProps } from "../types";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./feed-card.scss";

const FeedCard = ({ item }: FeedCardProps) => {
  return (
    <Card className="feed-card-container">
      <CardContent>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <Grid item xs={12}>
              <Typography variant="h5" mb={2}>
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12} mb={1}>
              <Typography variant="body1">{item.shortDesc}</Typography>
            </Grid>
            <Grid item xs={12} textAlign="left" pb={2}>
              <Grid item xs={6}>
                <Typography variant="caption">{item.author}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="caption">
                  {item.pubDate.toDateString()}
                </Typography>
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              m={"auto"}
              p={0.5}
              className="feed-card-container__top-border"
            >
              <Link to={`/${item.id}`} state={{ item }}>
                Leer más...
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item xs={12}>
              <CardMedia
                component="img"
                height="140"
                image={item.img || ""}
                alt="img"
              />
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
