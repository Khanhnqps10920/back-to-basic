/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (callbackFn === undefined || typeof callbackFn !== "function") {
    throw Error();
  }

  if (!this.length) {
    throw Error();
  }

  let tempInitVal = initialValue;

  if (!tempInitVal) {
    tempInitVal = this[0];
  }

  let val = initialValue;
  for (let i = 0; i < this.length; i++) {
    val = callbackFn(val, this[i], i, this);
  }

  return val;
};

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0));
