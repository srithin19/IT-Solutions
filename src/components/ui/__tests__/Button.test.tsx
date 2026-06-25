import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "@/components/ui/Button";

describe("Button Component", () => {
  it("renders children correctly", () => {
    render(
      <BrowserRouter>
        <Button>Click Me</Button>
      </BrowserRouter>,
    );

    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("handles onClick events", () => {
    const handleClick = vi.fn();
    render(
      <BrowserRouter>
        <Button onClick={handleClick}>Click Me</Button>
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it("renders as a Link when 'to' prop is provided", () => {
    render(
      <BrowserRouter>
        <Button to="/about">Navigate</Button>
      </BrowserRouter>,
    );

    const link = screen.getByText("Navigate").closest("a");
    expect(link).toBeInTheDocument();
    expect(link?.getAttribute("href")).toBe("/about");
  });

  it("renders as an anchor when 'href' prop is provided", () => {
    render(
      <BrowserRouter>
        <Button href="https://example.com">External Link</Button>
      </BrowserRouter>,
    );

    const link = screen.getByText("External Link").closest("a");
    expect(link).toBeInTheDocument();
    expect(link?.getAttribute("href")).toBe("https://example.com");
  });

  it("applies primary variant class", () => {
    const { container } = render(
      <BrowserRouter>
        <Button variant="primary">Primary</Button>
      </BrowserRouter>,
    );

    const button = container.querySelector(".btn-primary");
    expect(button).toBeInTheDocument();
  });

  it("applies secondary variant class", () => {
    const { container } = render(
      <BrowserRouter>
        <Button variant="secondary">Secondary</Button>
      </BrowserRouter>,
    );

    const button = container.querySelector(".btn-secondary");
    expect(button).toBeInTheDocument();
  });

  it("applies outline variant class", () => {
    const { container } = render(
      <BrowserRouter>
        <Button variant="outline">Outline</Button>
      </BrowserRouter>,
    );

    const button = container.querySelector(".btn-outline");
    expect(button).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <BrowserRouter>
        <Button className="custom-class">Custom</Button>
      </BrowserRouter>,
    );

    const button = container.querySelector(".custom-class");
    expect(button).toBeInTheDocument();
  });

  it("renders with correct button type", () => {
    render(
      <BrowserRouter>
        <Button type="submit">Submit</Button>
      </BrowserRouter>,
    );

    const button = screen.getByText("Submit");
    expect(button.getAttribute("type")).toBe("submit");
  });
});
