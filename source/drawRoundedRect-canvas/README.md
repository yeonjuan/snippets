# drawRoundedRect

Draw rounded rectangle on canvas.

## JavaScript

<!-- start: code-js -->

```js
function drawRoundedRect(ctx, x, y, width, height, radius, fillStyle) {
  ctx.save();
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

<!-- end: code-js -->

## TypeScript

<!-- start: code-ts -->

```ts
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fillStyle: CanvasFillStrokeStyles["fillStyle"]
) {
  ctx.save();
  ctx.fillStyle = fillStyle;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

<!-- end: code-ts -->

## Usage

```js
const canvas = createCanvas(size, size);
const ctx = canvas.getContext("2d");
drawRoundedRect(ctx, x, y, width, height, radius, "#ff0000");
```
