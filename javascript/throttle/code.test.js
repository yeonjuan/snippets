const throttle = require("./code");

jest.useFakeTimers();

describe("throttle", () => {
  let func;
  let throttledFunc;

  beforeEach(() => {
    func = jest.fn();
    throttledFunc = throttle(func, 1000);
  });

  test("execute just once", () => {
    for (let i = 0; i < 100; i++) {
      throttledFunc();
    }
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
});
