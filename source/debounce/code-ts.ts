function debounce<Fn extends (...args: any[]) => any>(fn: Fn, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<Fn>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export default debounce; // ignore build
