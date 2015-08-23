function mustImplement(name) {
  return function() {
    throw new TypeError("MustImplement: " + name );
  };
}

function rangeError(length, index) {
  throw new RangeError("Parameter must be within: [" + 0 + " and " + length + ") but was: " + index);
}

function insufficientArguments(actual, expected) {
  throw new TypeError("Insufficent Arguments expected: " + expected + " but got " + actual + "");
}

export {
  mustImplement,
  rangeError,
  insufficientArguments
};
