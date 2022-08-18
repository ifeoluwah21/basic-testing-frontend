import { it, describe, expect, vi, beforeEach } from "vitest"
import { extractPostData } from "./posts";

describe("extractPostData function", () => {
    const testTitle = "some test title";
    const testContent = "some test content";
    let testFormData;

    beforeEach(() => {


        // MOCKING THE FORM DATA OBJECT
        testFormData = {
            title: testTitle,
            content: testContent,
            get(key) {
                return this[key];
            }
        }
    })
    it('should extract title and content from the provided form data', () => {


        const data = extractPostData(testFormData);

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);

    })
})