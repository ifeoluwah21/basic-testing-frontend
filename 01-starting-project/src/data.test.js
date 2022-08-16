import { expect, it, describe, vi } from "vitest";
import { generateReportData } from "./data";


describe("generateReportData function", () => {
    it("should invoke logFn", () => {
        const logger = vi.fn(() => { });
        generateReportData(logger);
        expect(logger).toBeCalled(logger);
    })
})