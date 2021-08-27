# Debounce

Returns a function that delays the given `fn` until after the stated `delay` time in milliseconds have passed since the last time this debounced function was called.

## JavaScript

<!-- start: code-js -->

```js
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  };
}
```

<!-- end: code-js -->

## TypeScript

<!-- start: code-ts -->

```ts
function debounce<Fn extends (...args: any[]) => any>(fn: Fn, delay: number) {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: Parameters<Fn>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

<!-- end: code-ts -->

## Usage

```js
const doSomething = debounce(() => {
  /* */
}, 100);
window.addEventListener("scroll", doSomething);
```
