# Pipe

## Code

### JavaScript

```js
const pipe =
  (...funcs) =>
  (input) =>
    funcs.reduce((value, func) => func(value), input);
```
