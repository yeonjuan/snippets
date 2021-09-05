# degreeToRadian

Convert an angle from degrees to radians.

## JavaScript

<!-- start: code-js -->

```js
function degreeToRadian(degree) {
  return degree * (Math.PI / 180);
}
```

<!-- end: code-js -->

## TypeScript

<!-- start: code-ts -->

```ts
function degreeToRadian(degree: number) {
  return degree * (Math.PI / 180);
}
export default degreeToRadian;
```

<!-- end: code-ts -->

## Usage

```js
degreeToRadian(45); // 0.7853...
```
