import { render, screen } from "@testing-library/react";
import TitleBar from "../TitleBar";
import { MemoryRouter } from "react-router-dom";

describe("Test Block TitleBar Component", () => {
  it("should render the component title", () => {
    render(
      <MemoryRouter>
        <TitleBar />
      </MemoryRouter>
    );
    expect(screen.getByText("Intelygenz - Lector RSS")).toBeDefined();
  });
});
