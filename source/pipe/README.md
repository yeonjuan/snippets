# Pipe

It takes `operations`(sequence of functions) which all takes just one argument. And returns a composite function that passes an argument to the first of given `operations` and passes the output to the next until the last. The composite function returns the result of last the operation.

## JavaScript

<!-- start: code-js -->

```js
const pipe = (...operations) => {
  return (input) => {
    return operations.reduce((value, op) => op(value), input);
  };
};
```

<!-- end: code-js -->

## TypeScript

<!-- start: code-ts -->

```ts
type Pipe = {
  <P1, R>(f1: (p: P1) => R): (p: P1) => R;
  <P1, P2, R>(f1: (p: P1) => P2, f2: (p: P2) => R): (p: P1) => R;
  <P1, P2, P3, R>(f1: (p: P1) => P2, f2: (p: P2) => P3, f3: (p: P3) => R): (
    p: P1
  ) => R;
  // ...
};
const pipe: Pipe = <Fn extends (arg: unknown) => unknown>(
  ...operations: Fn[]
) => {
  return (input: unknown) => {
    return operations.reduce((value, op) => op(value), input);
  };
};
```

<!-- end: code-ts -->

## Usage

```js
const prefixHello = (str) => "Hello " + str;
const postfixWorld = (str) => str + " World";
const helloWorld = pipe(prefixHello, postfixWorld);
helloWorld("My"); // 'Hello My World
```
