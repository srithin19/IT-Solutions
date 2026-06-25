import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";

describe("Home Page", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders main heading", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const heading = container.querySelector("h1");
    expect(heading).toBeInTheDocument();
  });

  it("renders sections", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("has proper structure", () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
