import { it, expect, describe, vi } from "vitest";
import writeData from "./io.js";
import { promises as fs } from "node:fs"

vi.mock("node:fs");
vi.mock("node:path", () => {
    return {
        default: {
            join(...args) {
                return args[args.length - 1];
            }
        }
    }
});
describe("writeData function", () => {
    it("should invoke the writeFile method", () => {
        const testData = "test ran";
        const testFileName = "test.txt";
        writeData(testData, testFileName);
        //return expect(writeData(testData, testFileName)).resolves.toBeUndefined();

        expect(fs.writeFile).toBeCalledWith(testFileName, testData);
    })
})