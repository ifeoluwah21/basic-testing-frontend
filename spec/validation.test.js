import { expect, it, test, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "../src/util/validation";


describe("Tests on validateNumber function", () => {
    it("should throw error if the value is NaN", () => {
        let value = NaN;

        let result = () => {
            validateNumber(value);
        }

        expect(result).toThrow()
    })

    it("should throw error if the value is a string that is not transfomable to a number", () => {
        let value = "value";

        let result = () => {
            validateNumber(+value);
        }

        expect(result).toThrow();
    })

    it("should not throw error if the value is a number", () => {
        let value = 2;

        let result = () => {
            validateNumber(value);
        }

        expect(result).not.toThrow()
    })

    it("should not throw error if the value is transformable to a number", () => {
        let value = "21";

        let result = () => {
            validateNumber(value);
        }

        expect(result).not.toThrow();
    })
})

describe("Test on ValidateStringNotEmpty function", () => {
    it("should throw error if an empty string is passed", () => {
        let value = "";

        let result = () => {
            validateStringNotEmpty(value);
        }

        expect(result).toThrow(/must not be empty/);
    })

    it("should not throw error if the string is not empty", () => {
        let value = "value";

        let result = () => {
            validateStringNotEmpty(value);
        }

        expect(result).not.toThrow();
    })

    it("should throw error if the string is filled with just whitespaces", () => {
        let value = "      ";

        let result = () => {
            validateStringNotEmpty(value);
        }

        expect(result).toThrow();
    })

    it("should throw error if the data type is not string", () => {
        let value1 = {};
        let value2 = [];


        let result1 = () => {
            validateStringNotEmpty(value1);
        }
        let result2 = () => {
            validateStringNotEmpty(value2);
        }

        expect(result1).toThrow();
        expect(result2).toThrow();

    })
})


