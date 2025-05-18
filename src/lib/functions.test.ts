import { isHexColor } from "./functions";

describe("isHexColor", () => {
  it("should return true for valid 3-digit hex colors", () => {
    expect(isHexColor("#000")).toBe(true);
    expect(isHexColor("#FFF")).toBe(true);
    expect(isHexColor("#abc")).toBe(true);
  });

  it("should return true for valid 6-digit hex colors", () => {
    expect(isHexColor("#000000")).toBe(true);
    expect(isHexColor("#FFFFFF")).toBe(true);
    expect(isHexColor("#1a2b3c")).toBe(true);
  });

  it("should return false for hex colors without #", () => {
    expect(isHexColor("000")).toBe(false);
    expect(isHexColor("ffffff")).toBe(false);
  });

  it("should return false for invalid hex characters", () => {
    expect(isHexColor("#ggg")).toBe(false);
    expect(isHexColor("#12345z")).toBe(false);
  });

  it("should return false for strings that are not hex colors", () => {
    expect(isHexColor("red")).toBe(false);
    expect(isHexColor("#1234")).toBe(false);
    expect(isHexColor("")).toBe(false);
    expect(isHexColor("#")).toBe(false);
    expect(isHexColor("#FFFFF")).toBe(false);
  });
});
