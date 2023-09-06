import { render, screen } from "@testing-library/react";
import Feed from "../Feed";
import { MemoryRouter } from "react-router-dom";

describe("Test Block Feed Component", () => {
  it("should render the component", () => {
    render(
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    );
    const feed = screen.getByTestId("feed-container");
    expect(feed).toBeDefined();
  });

  it("should render the filter", () => {
    render(
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    );
    expect(screen.getByText(/Filtrar/i)).toBeDefined();
  });

  it("should render the buttons", () => {
    render(
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("button")).toBeDefined();
  });
});
