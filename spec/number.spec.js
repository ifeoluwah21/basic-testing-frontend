import { test, it, expect, describe } from "vitest";

import { cleanNumber, transformToNumber } from "../src/util/numbers.js";


describe(`Testing the transform to number function`, () => {
    it("should a string number to a number of type number", () => {
        let num1 = "4";

        const result = transformToNumber(num1);

        expect(result).toBeTypeOf("number");
        expect(result).toBe(+num1)

    })

    it("should return NaN non-transformable values", () => {
        let num1 = "ife";
        let num2 = [];
        let num3 = {}

        const result = transformToNumber(num1);
        const result2 = transformToNumber(num2);
        const result3 = transformToNumber(num3);

        expect(result).toBeNaN();
        // expect(result2).toBeNaN();
        expect(result3).toBeNaN();

    })

    it("should return NaN non-transformable values", () => {


        let num3 = {}


        const result2 = transformToNumber(num3);


        expect(result2).toBeNaN();

    })



})

describe("cleanNumber function", () => {
    it("should return an array of number values if an array of string number values is provided", () => {
        const numberValues = ["1", "2"];

        const cleanedNumbers = cleanNumber(numberValues);

        expect(cleanedNumbers[0]).toBeTypeOf("number");
        expect(cleanedNumbers[1]).toBeTypeOf("number");
    })

    it("should return an array of the number type of the array of string numbers provided", () => {
        const numberValues = ["4", "7"];

        const cleanedNumbers = cleanNumber(numberValues);

        expect(cleanedNumbers[0]).toBe(+numberValues[0]);
    })

    it("should throw error if any element of the array provided is an empty string", () => {
        const numberValues = ["1", "2", ""];

        const cleanFn = () => {
            cleanNumber(numberValues);
        }

        expect(cleanFn).toThrow();
    })

    it("should throw error if any element of the array provided is not transformable to a number", () => {
        const numberValues = ["1", "hi"];

        const cleanFn = () => {
            cleanNumber(numberValues);
        }

        expect(cleanFn).toThrow();
    })

    it("should throw error if is no value is provided", () => {
        const cleanFn = () => {
            cleanNumber()
        }

        expect(cleanFn).toThrow();
    })

    it("should throw error if an empty array is provided", () => {
        const numberValues = [];


        const cleanedNumbers = cleanNumber(numberValues)

        expect(cleanedNumbers.length).toBe(0);
    })

})