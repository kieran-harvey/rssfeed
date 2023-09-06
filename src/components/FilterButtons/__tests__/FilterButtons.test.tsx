import { fireEvent, render, screen } from "@testing-library/react";
import FilterButtons from "../FilterButtons";
import { MemoryRouter } from "react-router-dom";

describe("Test Block Filter Component", () => {
  const mockFn: () => void = jest.fn();
  const filterButtonOptions = [
    {
      id: "new",
      text: "Más nuevos",
      fun: () => mockFn(),
      selected: "new",
    },
    {
      id: "old",
      text: "Más antiguos",
      fun: () => mockFn(),
      selected: "new",
    },
  ];
  it("should render the component and the 2 filter buttons", () => {
    render(
      <MemoryRouter>
        <FilterButtons filterButtonOptions={filterButtonOptions} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("button")).toHaveLength(2);
  });
  it("should render the component and call setOrder", () => {
    render(
      <MemoryRouter>
        <FilterButtons filterButtonOptions={filterButtonOptions} />
      </MemoryRouter>
    );
    const button = screen.getAllByRole("button")[0];
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
