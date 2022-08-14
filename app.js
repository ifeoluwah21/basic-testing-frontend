import { extractFormData } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { generateCalculationResult, outputResult } from './output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractFormData(form);

  const result = calculateResult(numberValues);
  const resultText = generateCalculationResult(result);
  outputResult(resultText);

}

form.addEventListener('submit', formSubmitHandler);
