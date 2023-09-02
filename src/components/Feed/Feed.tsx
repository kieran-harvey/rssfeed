import React, { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Grid } from "@mui/material";
import { buildArticleItems, orderItems } from "../../utils";
import { Filter, OptionButtons, FeedCard } from "../";

const Feed = () => {
  const config: AxiosRequestConfig = {
    method: "get",
    url: "https://www.xatakandroid.com/tag/feeds/rss2.xml",
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  };
  const [rssData, setRssData] = useState<any>([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("");
  const [orderType, setOrderType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response: AxiosResponse = await axios(config);
      const items = buildArticleItems(response.data);
      console.log(items);
      setRssData(items);
    };
    fetchData();
  }, [config]);

  useEffect(() => {
    setRssData(orderItems(rssData, order, orderType));
  }, [order, orderType, rssData]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={8}>
        <Filter setFilter={setFilter} />
      </Grid>
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
