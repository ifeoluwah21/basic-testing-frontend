import { test, it, expect, describe } from "vitest";

import { transformToNumber } from "../src/util/numbers.js";


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