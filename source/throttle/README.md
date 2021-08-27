# throttle

Returns a function that can only call the given `fn` once per every `delay` in milliseconds.

## Code

<!-- start: code.js -->

```js
function throttle(fn, delay) {
  let timer;
  return function () {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, delay);
  };
}
```

<!-- end: code.js -->

## Usage

```js
const doSomething = throttle(() => {
  /* */
}, 100);
window.addEventListener("scroll", doSomething);
```
