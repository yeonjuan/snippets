# loadImage (Promise)

Loading image with Promise.

## JavaScript

<!-- start: code-js -->

```js
const loadImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = url;
  });
```

<!-- end: code-js -->

## TypeScript

<!-- start: code-ts -->

```ts
const loadImage = (url: string): Promise<HTMLImageElement> =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(error);
    image.src = url;
  });
```

<!-- end: code-ts -->

## Usage

```js
const img = await loadImage("/path/of/image.png");
```
