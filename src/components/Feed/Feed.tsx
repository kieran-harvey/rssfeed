import { useEffect, useMemo, useState } from "react";
import { Grid } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { fetchData, orderItems } from "../../utils";
import { Filter, FilterButtons, FeedCard } from "../";
import { ArticleItem } from "../types";
import "./feed.scss";

const Feed = () => {
  const [rssData, setRssData] = useState<ArticleItem[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [order, setOrder] = useState<string>("new");
  const [loading, setLoading] = useState<boolean>(false);

  const getArticles = async () => {
    try {
      setLoading(true);
      const items = await fetchData();
      setRssData(items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getArticles();
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
      <Grid item md={8} xs={12} sm={10}>
        <Filter setFilter={setFilter} />
        <FilterButtons filterButtonOptions={filterButtonOptions} />
      </Grid>
      <Grid item xs={12} md={8}>
        {!loading ? (
          rssData?.map((item: any) => {
            return (
              (item.title.toLowerCase().includes(filter.toLowerCase()) ||
                item.author.toLowerCase().includes(filter.toLowerCase()) ||
                item.shortDesc
                  .toLowerCase()
                  .includes(filter.toLowerCase())) && <FeedCard item={item} />
            );
          })
        ) : (
          <Grid xs={12} className="loading-container" mt={10}>
            <LoadingButton
              loading={loading}
              size="large"
              className="loading-container__button"
            />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default Feed;
