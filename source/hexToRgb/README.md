# hexToRgb

Convert HEX color value to RGB.

## JavaScript

<!-- start: code-js -->

```js
function hexToRgb(hex) {
  let normalized = hex.replace("#", "");
  if (normalized.length === 3) {
    // handle shorthand (e.g. F30 => FF3300)
    normalized = normalized
      .split("")
      .map((short) => short + short)
      .join("");
  }
  return {
    r: parseInt(normalized.substring(0, 2), 16),
    g: parseInt(normalized.substring(2, 4), 16),
    b: parseInt(normalized.substring(4, 6), 16),
  };
}
```

<!-- end: code-js -->

## TypeScript

<!-- start: code-ts -->

```ts
function hexToRgb(hex: string) {
  let normalized = hex.replace("#", "");
  if (normalized.length === 3) {
    // handle shorthand (e.g. F30 => FF3300)
    normalized = normalized
      .split("")
      .map((short) => short + short)
      .join("");
  }
  return {
    r: parseInt(normalized.substring(0, 2), 16),
    g: parseInt(normalized.substring(2, 4), 16),
    b: parseInt(normalized.substring(4, 6), 16),
  };
}
```

<!-- end: code-ts -->

## Usage

```js
hexToRgb("#eb4034"); // {r: 235, g: 64, b: 52}
hexToRgb("#f00"); // {r: 255, g: 0, b: 0}
```
