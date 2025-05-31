/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */

export default function classNames(...args) {
  let result = "";

  for (let i = 0; i < args.length; i++) {
    const value = args[i];
    if ((typeof value === "string" || typeof value === "number") && !!value) {
      result += value + " ";
      continue;
    }

    if (Array.isArray(value)) {
      for (let j = 0; j < value.length; j++) {
        const subArrVal = value[j];

        if (typeof subArrVal === "string") {
          result += subArrVal + " ";
        } else if (typeof subArrVal === "object" && subArrVal !== null) {
          const keysArray = Object.keys(value);
          for (const key of keysArray) {
            if (subArrVal[key]) {
              result += key + " ";
            }
          }
        }
      }

      continue;
    }

    if (typeof value === "object" && value !== null) {
      const keysArray = Object.keys(value);
      for (const key of keysArray) {
        console.log(key, "key");
        if (value[key]) {
          result += key + " ";
        }
      }

      continue;
    }
  }

  return result.trimEnd();
}
