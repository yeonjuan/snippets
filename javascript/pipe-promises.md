# Pipe promises

## Code

### JavaScript

```js
const promisePipe =
  (...fns) =>
  (x) =>
    fns.reduce((p, fn) => p.then(fn), Promise.resolve(x));
```
