export function isValidIndex(index, length) {
  return Number.isInteger(index) && index >= 0 && index <= length;
}
