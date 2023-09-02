import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  console.log(container);
  expect(container).toBeInTheDocument();
});
