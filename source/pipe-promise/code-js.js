const promisePipe = (...operations) => {
  return (input) => {
    return operations.reduce(
      (pValue, op) => pValue.then(op),
      Promise.resolve(input)
    );
  };
};

module.exports = promisePipe; // ignore build
