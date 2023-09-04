import React, { useState } from "react";
import { FeedCardProps } from "../types";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Link } from "react-router-dom";
import "./feed-card.scss";

const FeedCard = ({ item }: FeedCardProps) => {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);
  const [fav, setFav] = useState<boolean>(false);
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
          {/* <Grid
            item
            xs={12}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={4}>
              {likes}
              <span onClick={() => setLikes((prev) => prev + 1)}>
                <ThumbUpIcon />
              </span>
            </Grid>
            <Grid item xs={4}>
              {dislikes}
              <span onClick={() => setDislikes((prev) => prev + 1)}>
                <ThumbDownIcon />
              </span>
            </Grid>
            <Grid item xs={4}>
              {fav}
              <span onClick={() => setFav(!fav)}>
                {fav ? <StarIcon /> : <StarOutlineIcon />}
              </span>
            </Grid>
          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FeedCard;
