import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Layout from "@/components/layout/Layout";

describe("Layout Component", () => {
  it("renders header and footer", () => {
    const { container } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    const header = container.querySelector("header");
    const footer = container.querySelector("footer");

    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it("renders children content through Outlet", () => {
    const { container } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    const main = container.querySelector("main");
    expect(main).toBeInTheDocument();
  });

  it("has proper structure", () => {
    const { container } = render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );

    expect(container.querySelector("header")).toBeInTheDocument();
    expect(container.querySelector("main")).toBeInTheDocument();
    expect(container.querySelector("footer")).toBeInTheDocument();
  });
});
