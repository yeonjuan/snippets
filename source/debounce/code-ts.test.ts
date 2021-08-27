import debounce from "./code-ts";

jest.useFakeTimers();

describe("debounce", () => {
  let func: (...arg: any[]) => any;
  let debouncedFunc: (...arg: any[]) => void;

  beforeEach(() => {
    func = jest.fn();
    debouncedFunc = debounce(func, 1000);
  });

  test("execute just once", () => {
    for (let i = 0; i < 100; i++) {
      debouncedFunc();
    }
    jest.runAllTimers();
    expect(func).toBeCalledTimes(1);
  });
});
