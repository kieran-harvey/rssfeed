import { fireEvent, render, screen } from "@testing-library/react";
import FilterButtons from "../FilterButtons";
import { MemoryRouter } from "react-router-dom";

describe("Test Block TitleBar Component", () => {
  const order: string = "";
  const orderType: string = "";
  const setOrder: () => void = jest.fn();
  const setOrderType: () => void = jest.fn();
  it("should render the component and the 4 filter buttons", () => {
    render(
      <MemoryRouter>
        <FilterButtons
          order={order}
          orderType={orderType}
          setOrder={setOrder}
          setOrderType={setOrderType}
        />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("button")).toHaveLength(4);
  });
  it("should render the component and call setOrder", () => {
    render(
      <MemoryRouter>
        <FilterButtons
          order={order}
          orderType={orderType}
          setOrder={setOrder}
          setOrderType={setOrderType}
        />
      </MemoryRouter>
    );
    const button = screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(setOrder).toHaveBeenCalledTimes(1);
  });
  it("should render the component and call setOrderType", () => {
    render(
      <MemoryRouter>
        <FilterButtons
          order={order}
          orderType={orderType}
          setOrder={setOrder}
          setOrderType={setOrderType}
        />
      </MemoryRouter>
    );
    const button = screen.getAllByRole("button")[2];
    fireEvent.click(button);
    expect(setOrderType).toHaveBeenCalledTimes(1);
  });
});
