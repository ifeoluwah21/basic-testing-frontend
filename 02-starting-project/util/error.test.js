import { it, expect, describe } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError function", () => {
    it("should contain the provided status code, message and data", () => {
        const errorStatusCode = 404;
        const errorMessage = "resource not found";
        const errorData = { serverInfo: "server internal error" };

        const error = new HttpError(errorStatusCode, errorMessage, errorData);

        expect(error.statusCode).toBe(errorStatusCode);
        expect(error.message).toBe(errorMessage);
        expect(error.data).toBe(errorData);
    })

    it("should contain undefined as data if no data is provided", () => {
        const errorStatusCode = 404;
        const errorMessage = "resource not found";
        const error = new HttpError(errorStatusCode, errorMessage);

        expect(error.statusCode).toBe(errorStatusCode);
        expect(error.message).toBe(errorMessage);
        expect(error.data).toBeUndefined();
    })
})

describe("validationErro function", () => {
    it("should contain the provided message", (done) => {
        const errorMessage = "error error!!!";

        const error = new ValidationError(errorMessage);

        expect(error.message).toBe(errorMessage);
        done();
    })
})