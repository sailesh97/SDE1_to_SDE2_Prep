/**
 * Returns the value at the path of the object
 *
 * @export
 * @param {*} obj - object from which the value is to be retrieved
 * @param {*} path - path of the property to get from obj
 * @returns retrieved value
 */
export default function getObjectProperty(obj, path) {
  const keys = path.split('.');
  let value = { ...obj };
  keys.forEach(key => {
    value =
      value[key] && typeof value[key] === 'object'
        ? { ...value[key] }
        : value[key];
  });
  return value;
}

/**
 * Checks if a given value is numeric.
 * 
 * This function determines if a value is numeric by verifying that it can be
 * parsed into a float and is not NaN (Not-a-Number).
 * 
 * @param {*} value - The value to be checked.
 * @returns {boolean} - Returns true if the value is numeric, false otherwise.
 */
export const isNumeric = (value) => { 
  // Check if the value is not NaN when parsed as a number
  // and also check if the parsed float value is not NaN.
  return !isNaN(value) && !isNaN(parseFloat(value)); 
}