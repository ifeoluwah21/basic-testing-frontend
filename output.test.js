import { describe, it, expect } from "vitest";
import { generateCalculationResult } from "./output.js";

describe("generateCalculationResult function", () => {
    it("should return a string, no matter which value is passed in", () => {
        let result1 = 5;
        let result2 = [];
        let result3 = `ifeoluwah`;
        let result4 = {};

        const resultText1 = generateCalculationResult(result1);
        const resultText2 = generateCalculationResult(result2);
        const resultText3 = generateCalculationResult(result3);
        const resultText4 = generateCalculationResult(result4);

        expect(resultText1).toBeTypeOf("string");
        expect(resultText2).toBeTypeOf("string");
        expect(resultText3).toBeTypeOf("string");
        expect(resultText4).toBeTypeOf("string");

    })

    it("should return a string that contains the calculation result if a number is provided as a result", () => {
        const result1 = 4;
        const result2 = 29;

        const resultText1 = generateCalculationResult(result1);
        const resultText2 = generateCalculationResult(result2);

        expect(resultText1).toContain(result1.toString());
        expect(resultText2).toContain(result2.toString());
    })

    it(`should return an empty string if "no-calc" is provided as a result`, () => {
        const result = "no-calc";

        const resultText = generateCalculationResult(result);

        expect(resultText).toBe(``);
    })

    it(`should return a return a string that contains "Invalid" if "invalid" is provided as a result`, () => {
        let result = "invalid";

        let resultText = generateCalculationResult(result);

        expect(resultText).toContain("Invalid");
    })
})