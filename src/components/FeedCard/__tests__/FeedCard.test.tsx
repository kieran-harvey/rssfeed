import { render, screen } from "@testing-library/react";
import FeedCard from "../FeedCard";
import { MemoryRouter } from "react-router-dom";

describe("Test Block FeedCard Component", () => {
  const item = {
    id: "1234",
    title: "title",
    pubDate: new Date(Date.now()),
    author: "Pepe",
    desc: "Description",
    shortDesc: "Short Description",
    img: "",
  };
  it("should render the component and the title", () => {
    render(
      <MemoryRouter>
        <FeedCard item={item} />
      </MemoryRouter>
    );
    const title = screen.getByRole("heading");
    expect(title).toBeDefined();
  });

  it("should render the component and the image", () => {
    render(
      <MemoryRouter>
        <FeedCard item={item} />
      </MemoryRouter>
    );
    const img = screen.getByRole("img");
    expect(img).toBeDefined();
  });

  it("should render the component and the link to open the detail", () => {
    render(
      <MemoryRouter>
        <FeedCard item={item} />
      </MemoryRouter>
    );
    const link = screen.getAllByRole("link");
    expect(link).toBeDefined();
  });
});
