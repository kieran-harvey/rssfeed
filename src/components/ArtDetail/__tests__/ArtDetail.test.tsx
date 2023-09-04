import { render, screen } from "@testing-library/react";
import ArtDetail from "../ArtDetail";
import { MemoryRouter } from "react-router-dom";

describe("Test Block ArtDetail Component", () => {
  const route = "/2ae54b6b-f1d0-4184-bc5c-141d6f583b31";
  const item = {
    id: "1234",
    title: "title",
    pubDate: new Date(Date.now()),
    author: "Pepe",
    desc: "<div style='test'>description</div>",
    shortDesc: "Short Description",
  };

  it("renders the component with the location item", () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: route, state: { item: item } }]}
      >
        <ArtDetail />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading")).toBeDefined();
    expect(screen.getByText("title")).toBeInTheDocument();
  });

  it("renders the component with return link", () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: route, state: { item: item } }]}
      >
        <ArtDetail />
      </MemoryRouter>
    );
    expect(screen.getAllByTestId("return-link")).toBeDefined();
  });
});
