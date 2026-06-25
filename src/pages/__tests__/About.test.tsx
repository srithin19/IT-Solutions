import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "@/pages/About";

describe("About Page", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders sections", () => {
    const { container } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("has main heading", () => {
    const { container } = render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );

    const heading = container.querySelector("h1");
    expect(heading).toBeInTheDocument();
  });
});
