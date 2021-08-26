const pipe = (...operations) => {
  return (input) => {
    return operations.reduce((value, operate) => operate(value), input);
  };
};

module.exports = pipe; // ignore build
