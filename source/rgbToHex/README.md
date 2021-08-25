# rgbToHex

Convert RGB color value to HEX.

## Code

<!-- start: code -->

```js
function rgbToHex(r, g, b) {
  return `#${[r, g, b]
    .map((v) => v.toString(16))
    .map((hex) => (hex.length === 1 ? `0${hex}` : hex))
    .join("")}`;
}
```

<!-- end: code -->

## Usage

```js
rgbToHex(235, 64, 52); // '#eb4034'
rgbToHex(0, 0, 0); // '#000000'
```
