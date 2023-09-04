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
});
