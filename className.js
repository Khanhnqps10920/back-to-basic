/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */

export default function classNames(...args) {
  let result = "";

  for (const arg of args) {
    if (!arg) continue;

    const type = typeof arg;

    if (type === "string" || type === "number") {
      result += arg + " ";
    } else if (Array.isArray(arg)) {
      result += classNames(...arg) + " ";
    } else if (type === "object") {
      for (const key in arg) {
        if (Object.hasOwn(arg, key) && arg[key]) {
          result += key + " ";
        }
      }
    }
  }

  return result.trim();
}
