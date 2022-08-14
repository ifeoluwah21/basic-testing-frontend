import { validateNumber, validateStringNotEmpty } from "./validation.js"

function transformToNumber(value) {
  return +value;
}

function cleanNumber(numberValues, numbers) {
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}


export { transformToNumber, cleanNumber }