import React, { useEffect, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { buildArticleItems, orderItems } from "../../utils";
import { Filter, FilterButtons, FeedCard } from "../";
import { ArticleItem } from "../types";
import "./feed.scss";

const Feed = () => {
  const [rssData, setRssData] = useState<ArticleItem[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [order, setOrder] = useState<string>("new");
  // const [orderType, setOrderType] = useState<string>("desc");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.xatakandroid.com/tag/feeds/rss2.xml"
      );
      const data = await response.text();
      const items = buildArticleItems(data);
      setRssData(items);
    };
    fetchData();
  }, []);

  useMemo(() => {
    setRssData((prev) => orderItems(prev, order));
  }, [order]);

  const filterButtonOptions = [
    {
      id: "new",
      text: "Más nuevos",
      fun: () => setOrder("new"),
      selected: order,
    },
    {
      id: "old",
      text: "Más antiguos",
      fun: () => setOrder("old"),
      selected: order,
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      data-testid="feed-container"
    >
      <Grid item xs={8}>
        <Filter setFilter={setFilter} />
        <FilterButtons filterButtonOptions={filterButtonOptions} />
      </Grid>
      {/* <Grid item xs={8} alignItems="center" display="flex">
        <Grid item xs={3}>
          Ordered by:{" "}
          <strong>
            {order === "abc" ? "Title" : "Date"},
            {orderType === "asc" ? " Ascending" : " Descending"}
          </strong>
        </Grid>
      </Grid> */}
      <Grid item xs={8}>
        {rssData?.map((item: any) => {
          return (
            (item.title.toLowerCase().includes(filter.toLowerCase()) ||
              item.author.toLowerCase().includes(filter.toLowerCase()) ||
              item.shortDesc.toLowerCase().includes(filter.toLowerCase())) && (
              <FeedCard item={item} />
            )
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Feed;
