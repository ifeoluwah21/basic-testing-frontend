import { cleanNumber } from "./util/numbers.js";

function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }
  return sum;
}

function calculateResult(numberValues) {
  let result = "";
  try {
    const numbers = cleanNumber(numberValues);
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result;
}

export { add, calculateResult };