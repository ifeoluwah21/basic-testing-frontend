import { it, expect, describe, vi } from "vitest";
import writeData from "./io.js";
import { promises as fs } from "fs"

vi.mock("fs");
vi.mock("path");
describe("writeData function", () => {
    it("should invoke the writeFile method", () => {
        const testData = "test ran";
        const testFileName = "test.txt";
        writeData(testData, testFileName);
        expect(fs.writeFile).toBeCalledWith(testFileName, testData);
        return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    })
})