const pipe = require("./code-js");

describe("pipe", () => {
  test("pipe one", () => {
    const inc = (value) => value + 1;
    const _pipe = pipe(inc);
    expect(_pipe(1)).toBe(2);
  });
  test("pipe two", () => {
    const inc = (value) => value + 1;
    const _pipe = pipe(inc, inc);
    expect(_pipe(1)).toBe(3);
  });
  test("HelloWorld", () => {
    const prefixHello = (str) => "Hello " + str;
    const postfixWorld = (str) => str + " World";

    const helloWorld = pipe(prefixHello, postfixWorld);

    expect(helloWorld("My")).toBe("Hello My World");
  });
});
