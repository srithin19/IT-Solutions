import { describe, it, expect } from "vitest";
import {
  navigationItems,
  services,
  solutions,
  contactInfo,
} from "@/data/constants";

describe("Constants Data", () => {
  describe("navigationItems", () => {
    it("has correct structure", () => {
      expect(Array.isArray(navigationItems)).toBe(true);
      expect(navigationItems.length).toBeGreaterThan(0);
    });

    it("each item has required properties", () => {
      navigationItems.forEach((item) => {
        expect(item).toHaveProperty("label");
        expect(item).toHaveProperty("path");
      });
    });

    it("includes main navigation items", () => {
      const labels = navigationItems.map((item) => item.label);
      expect(labels).toContain("Home");
      expect(labels).toContain("About");
      expect(labels).toContain("Services");
    });
  });

  describe("services", () => {
    it("is an array", () => {
      expect(Array.isArray(services)).toBe(true);
    });

    it("has service items", () => {
      expect(services.length).toBeGreaterThan(0);
    });

    it("each service has required properties", () => {
      services.forEach((service) => {
        expect(service).toHaveProperty("title");
        expect(service).toHaveProperty("description");
      });
    });
  });

  describe("solutions", () => {
    it("is an array", () => {
      expect(Array.isArray(solutions)).toBe(true);
    });

    it("has solution items", () => {
      expect(solutions.length).toBeGreaterThan(0);
    });

    it("each solution has required properties", () => {
      solutions.forEach((solution) => {
        expect(solution).toHaveProperty("title");
        expect(solution).toHaveProperty("description");
      });
    });
  });

  describe("contactInfo", () => {
    it("has required contact properties", () => {
      expect(contactInfo).toHaveProperty("address");
      expect(contactInfo).toHaveProperty("phone");
      expect(contactInfo).toHaveProperty("email");
    });

    it("has valid email format", () => {
      expect(contactInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it("has non-empty values", () => {
      expect(contactInfo.address).toBeTruthy();
      expect(contactInfo.phone).toBeTruthy();
      expect(contactInfo.email).toBeTruthy();
    });
  });
});
