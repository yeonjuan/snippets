# Pipe (Promise)

It's a pipe function supports promise-returning & async function.

## Code

<!-- start: code-js -->

```js
const promisePipe = (...operations) => {
  return (input) => {
    return operations.reduce(
      (pValue, op) => pValue.then(op),
      Promise.resolve(input)
    );
  };
};
```

<!-- end: code-js -->

## Usage

```js
const prefixHello = (str) => "Hello " + str;
const postfixWorld = (str) => str + " World";
const helloWorld = pipe(prefixHello, postfixWorld);
helloWorld("My"); // 'Hello My World
```
