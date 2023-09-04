import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "../Filter";
import { MemoryRouter } from "react-router-dom";

describe("Test Block Filter Component", () => {
  const setFilter = jest.fn();
  it("should render the component", () => {
    render(
      <MemoryRouter>
        <Filter setFilter={setFilter} />
      </MemoryRouter>
    );
    const inputElem = screen.getByLabelText("Filtrar");
    expect(inputElem).toBeDefined();
  });
  it("should change when the user types", () => {
    render(
      <MemoryRouter>
        <Filter setFilter={setFilter}></Filter>
      </MemoryRouter>
    );
    const inputElem = screen.getByLabelText("Filtrar");
    fireEvent.change(inputElem, { target: { value: "android" } });
    expect(inputElem).toHaveValue("android");
  });
});
