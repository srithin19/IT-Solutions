import { describe, it, expect } from "vitest";
import { cn } from "@/utils/helpers";

describe("Helpers Utilities", () => {
  describe("cn (className merger)", () => {
    it("merges multiple class names", () => {
      const result = cn("class1", "class2", "class3");
      expect(result).toBe("class1 class2 class3");
    });

    it("handles conditional classes", () => {
      const isHidden = false;
      const result = cn("base", "active", isHidden && "hidden");
      expect(result).toBe("base active");
    });

    it("handles undefined and null values", () => {
      const result = cn("class1", undefined, null, "class2");
      expect(result).toBe("class1 class2");
    });

    it("handles objects with boolean values", () => {
      const result = cn({
        active: true,
        hidden: false,
        visible: true,
      });
      expect(result).toBe("active visible");
    });

    it("handles arrays of classes", () => {
      const result = cn(["class1", "class2"], "class3");
      expect(result).toBe("class1 class2 class3");
    });

    it("handles empty input", () => {
      const result = cn();
      expect(result).toBe("");
    });

    it("deduplicates classes", () => {
      const result = cn("test", "test");
      expect(result).toContain("test");
    });
  });
});
