import { fireEvent, render, screen } from "@testing-library/react";
import Filter from "../Filter";
import { MemoryRouter } from "react-router-dom";

describe("Test Block Filter Component", () => {
  const setFilter = jest.fn();
  it("should render the component", () => {
    render(
      <MemoryRouter initialEntries={["/2ae54b6b-f1d0-4184-bc5c-141d6f583b31"]}>
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
