import { render, screen } from "@testing-library/react";
import TitleBar from "../TitleBar";
import { MemoryRouter } from "react-router-dom";

describe("Test Block TitleBar Component", () => {
  it("should render the component title", () => {
    render(
      <MemoryRouter initialEntries={["/2ae54b6b-f1d0-4184-bc5c-141d6f583b31"]}>
        <TitleBar />
      </MemoryRouter>
    );
    expect(screen.getByText("Intelygenz - Lector RSS")).toBeDefined();
  });
});
