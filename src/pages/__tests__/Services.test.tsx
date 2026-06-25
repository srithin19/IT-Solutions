import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Services from "@/pages/Services";

describe("Services Page", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders sections", () => {
    const { container } = render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>,
    );

    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("has grid layout for services", () => {
    const { container } = render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>,
    );

    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
  });
});
