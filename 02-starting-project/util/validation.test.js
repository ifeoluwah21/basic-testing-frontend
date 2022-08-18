import { it, expect, describe } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty function", () => {
    it("should throw error if an empty string is provided as value", () => {
        const text = "";

        const validateFn = () => {
            validateNotEmpty(text);
        }

        expect(validateFn).toThrow();
    })

    it("should throw error if the value is a string of blanks", () => {
        const text = "     ";

        const validateFn = () => {
            validateNotEmpty(text);
        }

        expect(validateFn).toThrow();
    })

    it("should throw an error with the provided error message", () => {
        const text = "";
        const errorMessage = "provide a valid text character";

        const validateFn = () => {
            validateNotEmpty(text, errorMessage);
        }

        expect(validateFn).toThrow(errorMessage);
    })
})