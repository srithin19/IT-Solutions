import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import { contactInfo } from "@/data/constants";

describe("Footer Component", () => {
  it("renders company brand", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    const elements = screen.getAllByText(/NSLogix IT Solutions/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it("renders contact information", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByText(contactInfo.address)).toBeInTheDocument();
    expect(screen.getByText(contactInfo.email)).toBeInTheDocument();
  });

  it("displays current year in copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString())),
    ).toBeInTheDocument();
  });

  it("renders service links", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    const elements = screen.getAllByText(/Services/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it("renders social media or additional links section", () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
