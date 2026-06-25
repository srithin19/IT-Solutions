import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Section from "@/components/ui/Section";

describe("Section Component", () => {
  it("renders children correctly", () => {
    render(
      <Section>
        <div>Test Content</div>
      </Section>,
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Section className="custom-section">
        <div>Content</div>
      </Section>,
    );

    const section = container.querySelector("section");
    expect(section?.className).toContain("custom-section");
  });

  it("applies custom id", () => {
    const { container } = render(
      <Section id="test-section">
        <div>Content</div>
      </Section>,
    );

    const section = container.querySelector("#test-section");
    expect(section).toBeInTheDocument();
  });

  it("renders with proper structure", () => {
    const { container } = render(
      <Section>
        <div>Content</div>
      </Section>,
    );

    const section = container.querySelector("section");
    expect(section).toBeInTheDocument();
  });

  it("has default padding classes", () => {
    const { container } = render(
      <Section>
        <div>Content</div>
      </Section>,
    );

    const section = container.querySelector("section");
    expect(section?.className).toContain("py-");
  });
});
