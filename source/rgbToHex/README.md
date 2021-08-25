# rgbToHex

Convert RGB color value to HEX.

## Code

<!-- start: code -->

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

<!-- end: code -->

## Usage

```js
rgbToHex(235, 64, 52); // '#eb4034'
rgbToHex(0, 0, 0); // '#000000'
```
