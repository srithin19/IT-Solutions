import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DigitalMarketing from "@/pages/DigitalMarketing";

describe("DigitalMarketing Page", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <DigitalMarketing />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders sections", () => {
    const { container } = render(
      <BrowserRouter>
        <DigitalMarketing />
      </BrowserRouter>,
    );

    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("renders marketing services grid", () => {
    const { container } = render(
      <BrowserRouter>
        <DigitalMarketing />
      </BrowserRouter>,
    );

    const grid = container.querySelector(".grid");
    expect(grid).toBeInTheDocument();
  });
});
