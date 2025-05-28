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

  if (!this.length && initialValue === undefined) {
    throw Error();
  }

  let tempInitVal = initialValue;

  if (tempInitVal === undefined) {
    tempInitVal = this[0];
  }

  let val = tempInitVal;

  for (let i = 0; i < this.length; i++) {
    if (initialValue === undefined && i == 0) continue;
    if (this[i] === undefined) continue;
    val = callbackFn(val, this[i], i, this);
  }

  return val;
};
