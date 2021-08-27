const promisePipe = require("./code-js");

describe("promisePipe", () => {
  test("promisePipe one", async () => {
    const inc = (value) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(value + 1);
        }, 100);
      });
    const _pipe = promisePipe(inc);
    expect(await _pipe(1)).toBe(2);
  });

  test("promisePipe two", async () => {
    const inc = (value) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(value + 1);
        }, 100);
      });
    const _pipe = promisePipe(inc, inc);
    expect(await _pipe(1)).toBe(3);
  });
});
