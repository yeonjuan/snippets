const pipe = (...operations) => {
  return (input) => {
    return operations.reduce((value, op) => op(value), input);
  };
};

module.exports = pipe; // ignore build
