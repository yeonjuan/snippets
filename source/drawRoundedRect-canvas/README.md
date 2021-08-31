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

## Example

- x: 0
- y: 0
- width: 100
- height: 100
- fillStyle: #fca103
  | radius: 50 | radius 20 | radius 0 |
  | --- | --- | --- |
  | ![](./__image_snapshots__/code-js-test-js-draw-rounded-rect-radius-50-1-snap.png) | ![](./__image_snapshots__/code-js-test-js-draw-rounded-rect-radius-20-1-snap.png) | ![](./__image_snapshots__/code-js-test-js-draw-rounded-rect-radius-0-1-snap.png) |
