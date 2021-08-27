import hexToRgb from "./code-ts";

jest.useFakeTimers();

describe("hexToRgb", () => {
  test.each([
    ["#eb4034", { r: 235, g: 64, b: 52 }],
    ["#7d4541", { r: 125, g: 69, b: 65 }],
    ["#0a0a0a", { r: 10, g: 10, b: 10 }],
    ["#000000", { r: 0, g: 0, b: 0 }],
    ["#fff", { r: 255, g: 255, b: 255 }],
    ["#f00", { r: 255, g: 0, b: 0 }],
    ["eb4034", { r: 235, g: 64, b: 52 }],
    ["f00", { r: 255, g: 0, b: 0 }],
  ])("hexToRgb(%i, %i, %i)", (hex, expected) => {
    expect(hexToRgb(hex)).toStrictEqual(expected);
  });
});
