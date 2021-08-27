import pipe from "./code-ts";

const inc = (value: number) => value + 1;
const prefix = (value: number | string) => "prefix" + value;

describe("pipe", () => {
  test("pipe one", () => {
    const _pipe = pipe(inc);
    expect(_pipe(1)).toBe(2);
  });
  test("pipe two", () => {
    const _pipe = pipe(inc, inc);
    expect(_pipe(1)).toBe(3);
  });

  test("pipe different type", () => {
    const _pipe = pipe(inc, prefix);
    expect(_pipe(1)).toBe("prefix2");
  });
});
