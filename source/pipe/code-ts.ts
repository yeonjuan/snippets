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

export default pipe; // ignore build
