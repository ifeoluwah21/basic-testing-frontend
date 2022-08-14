
import { test, it, expect, describe } from "vitest";
import { add } from "../src/math.js";

describe("Testing the add function", () => {
    it("Add the numbers in the array", () => {

        //ARRANGE
        const numbers = [1, 4, 8, 2];

        //ACT
        let result = add(numbers);

        //ASSERT
        let expectedValue = numbers.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0)
        expect(result).toBe(expectedValue);
    })


    it("Should yield NaN if at least one invalid is provided", () => {
        //ARRANGE
        let numbers = ["s", 2];

        //ACT
        let result = add(numbers);

        //ASSERT
        expect(result).toBeNaN();
    })

    it("Should yield a correct sum if an array of numeric string values is provided", () => {
        //ARRANGE
        let numbers = [`1`, `5`];

        //ACT
        let result = add(numbers);

        //ASSERT
        let expectedValue = numbers.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
        expect(result).toBe(expectedValue);
    })

    it("Should yield 0 if an empty array is provided", () => {
        //ARRANGE
        let numbers = [];

        //ACT
        let result = add(numbers);

        //ASSERT

        expect(result).toBe(0);

    })

    it("should throw error if no argument is passed to the function", () => {
        let fn = () => {
            add()
        }

        expect(fn).toThrow();
    })

    it("should throw error if passed with multiple argument instead of array", function () {
        let num1 = 4;
        let num2 = 2;

        const fn = () => {
            add(num1, num2)
        }

        expect(fn).toThrow(TypeError);
    })
})