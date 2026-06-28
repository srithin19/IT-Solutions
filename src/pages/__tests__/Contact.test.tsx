import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Contact from "@/pages/Contact";

describe("Contact Page", () => {
  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders sections", () => {
    const { container } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );

    const sections = container.querySelectorAll("section");
    expect(sections.length).toBeGreaterThan(0);
  });

  it("renders contact form", () => {
    const { container } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );

    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();
  });

  it("renders form input fields", () => {
    const { container } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );

    const inputs = container.querySelectorAll("input, textarea");
    expect(inputs.length).toBeGreaterThan(0);
  });

  it("includes optional subject field", () => {
    const { container } = render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );

    const subjectInput = container.querySelector('input[name="subject"]');
    expect(subjectInput).toBeInTheDocument();
    expect(subjectInput).not.toHaveAttribute("required");
  });
});
