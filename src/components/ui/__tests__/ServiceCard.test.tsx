import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ServiceCard from "@/components/ui/ServiceCard";

describe("ServiceCard Component", () => {
  const mockProps = {
    title: "Test Service",
    description: "This is a test description",
    icon: <svg data-testid="test-icon">Icon</svg>,
  };

  it("renders without crashing", () => {
    const { container } = render(
      <BrowserRouter>
        <ServiceCard {...mockProps} />
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });

  it("renders title and description", () => {
    render(
      <BrowserRouter>
        <ServiceCard {...mockProps} />
      </BrowserRouter>,
    );

    expect(screen.getByText("Test Service")).toBeInTheDocument();
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(
      <BrowserRouter>
        <ServiceCard {...mockProps} />
      </BrowserRouter>,
    );

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("has card class", () => {
    const { container } = render(
      <BrowserRouter>
        <ServiceCard {...mockProps} />
      </BrowserRouter>,
    );

    const card = container.querySelector(".card");
    expect(card).toBeInTheDocument();
  });
});
