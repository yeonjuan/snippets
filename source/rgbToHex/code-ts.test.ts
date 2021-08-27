import rgbToHex from "./code-ts";

jest.useFakeTimers();

describe("rgbToHex", () => {
  test.each([
    [235, 64, 52, "#eb4034"],
    [125, 69, 65, "#7d4541"],
    [10, 10, 10, "#0a0a0a"],
    [0, 0, 0, "#000000"],
  ])("rgbToHex(%i, %i, %i)", (r, g, b, expected) => {
    expect(rgbToHex(r, g, b)).toBe(expected);
  });
});
