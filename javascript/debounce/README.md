# Debounce

Returns a function that delays the given `fn` until after the stated `delay` time in milliseconds have passed since the last time this debounced function was called.

## Code

<!-- start: code -->

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

<!-- end: code -->

## Usage

```js
const doSomething = debounce(() => {
  /* */
}, 100);

window.addEventListener("scroll", doSomething);
```
