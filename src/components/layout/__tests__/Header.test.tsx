import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "@/components/layout/Header";

describe("Header Component", () => {
  beforeEach(() => {
    // Reset window.scrollY before each test
    Object.defineProperty(window, "scrollY", {
      writable: true,
      value: 0,
    });

    Object.defineProperty(window, "scrollTo", {
      writable: true,
      value: vi.fn(),
    });
  });

  it("renders the company logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText("NSLogix IT Solutions")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Services")).toBeInTheDocument();
    expect(screen.getByText("Solutions")).toBeInTheDocument();
    expect(screen.getByText("Digital Marketing")).toBeInTheDocument();
    expect(screen.getByText("Get Quotation")).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(screen.getByText("Get Quotation")).toBeInTheDocument();
  });

  it("has proper structure and classes", () => {
    const { container } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
    expect(header?.className).toContain("fixed");
    expect(header?.className).toContain("w-full");
  });

  it("scrolls to top when clicking current nav link", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <Header />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText("About"));

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
