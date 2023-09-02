import { render, screen } from "@testing-library/react";
import ArtDetail from "../ArtDetail";
import {
  BrowserRouter,
  MemoryRouter,
  HistoryRouterProps,
} from "react-router-dom";

describe("Test Block ArtDetail Component", () => {
  it("rendering a component that uses useLocation", () => {
    const route = "/2ae54b6b-f1d0-4184-bc5c-141d6f583b31";
    const item = {
      id: "1234",
      title: "title",
      pubDate: new Date(Date.now()),
      author: "Pepe",
      desc: "Description",
      shortDesc: "Short Description",
    };
    render(
      <MemoryRouter initialEntries={[{ pathname: route, state: { item } }]}>
        <ArtDetail />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading")).toBeDefined();
  });
});
