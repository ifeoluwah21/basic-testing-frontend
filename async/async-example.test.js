import { it, describe, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";


describe("Generate token()", () => {
    it("should generate a token value", (done) => {
        let testUserEmail = "test@gamil.com";

        generateToken(testUserEmail, (error, token) => {
            try {
                expect(token).toBeDefined();
                done();
            } catch (err) {
                done(err)
            }
        })
    })
})

describe("GenerateTokenPromise function", () => {
    it("should return a token value", () => {
        let key = "test@email.com";

        return expect(generateTokenPromise(key)).resolves.toBeDefined();
    })
})
describe("GenerateTokenPromise function using async/await", () => {
    it("should return a token value", async () => {
        let key = "test@email.com";

        let token = await generateTokenPromise(key);
        expect(token).toBeDefined();
    })
})