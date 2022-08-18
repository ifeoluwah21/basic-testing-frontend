import { describe, it, expect, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

const testResponseData = { testKey: "blabla" };
const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        const testData = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                })
            }
        }
        if (typeof options.body !== "string") {
            return reject("Not a string")
        }
        resolve(testData);
    })
})
vi.stubGlobal("fetch", testFetch)

describe("sendDataRequest function", () => {
    it("should return any avaliable response data", () => {
        const testData = { key: "test" };

        return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
    })

    it("should convert the provided data to json before sending the request", async () => {
        const testData = { key: "test" };

        let errorMessage;

        try {
            await sendDataRequest(testData);
        } catch (e) {
            errorMessage = e;
        }
        expect(errorMessage).not.toBe("Not a string");
    })

    it("should throw HttpError for non-ok response", () => {
        testFetch.mockImplementationOnce(vi.fn((url, options) => {
            return new Promise((resolve, reject) => {
                const testData = {
                    ok: false,
                    json() {
                        return new Promise((resolve, reject) => {
                            resolve(testResponseData);
                        })
                    }
                }
                resolve(testData);
            })
        }))

        const testData = { key: "test" };

        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
    })

})