import { Grid, ButtonGroup, Button } from "@mui/material";
import "./filter-buttons.scss";
import { FilterButtonProps, FilterButtonsButton } from "../types";

const FilterButtons = (props: FilterButtonProps) => {
  const { filterButtonOptions } = props;
  return (
    <Grid item xs={12} ml={2}>
      <div className="order-group">
        <ButtonGroup variant="text">
          {filterButtonOptions.map((button: FilterButtonsButton) => {
            return (
              <Button
                key={button.id}
                id={button.id}
                onClick={() => button.fun("new")}
                className={button.selected === button.id ? "selected" : ""}
              >
                {button.text}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    </Grid>
  );
};

export default FilterButtons;
