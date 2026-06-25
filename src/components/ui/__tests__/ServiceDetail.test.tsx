import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ServiceDetail from "@/components/ui/ServiceDetail";

describe("ServiceDetail Component", () => {
  const mockService = {
    title: "Test Service",
    description: "Test Description",
    features: ["Feature 1", "Feature 2", "Feature 3"],
    benefits: ["Benefit 1", "Benefit 2"],
    icon: <svg data-testid="test-icon">Icon</svg>,
  };

  it("renders service title", () => {
    render(
      <BrowserRouter>
        <ServiceDetail {...mockService} />
      </BrowserRouter>,
    );
    expect(screen.getByText("Test Service")).toBeInTheDocument();
  });

  it("renders service description", () => {
    render(
      <BrowserRouter>
        <ServiceDetail {...mockService} />
      </BrowserRouter>,
    );
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders icon", () => {
    render(
      <BrowserRouter>
        <ServiceDetail {...mockService} />
      </BrowserRouter>,
    );
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("renders all features", () => {
    render(
      <BrowserRouter>
        <ServiceDetail {...mockService} />
      </BrowserRouter>,
    );
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
  });

  it("renders all benefits", () => {
    render(
      <BrowserRouter>
        <ServiceDetail {...mockService} />
      </BrowserRouter>,
    );
    expect(screen.getByText("Benefit 1")).toBeInTheDocument();
    expect(screen.getByText("Benefit 2")).toBeInTheDocument();
  });
});
