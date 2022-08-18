import { describe, it, expect, vi, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;


vi.stubGlobal("document", document);

describe("showError function", () => {

    beforeEach(() => {
        document.body.innerHTML = "";
        document.write(htmlDocumentContent);
    })
    it("should add an error paragraph to the id='error' element", () => {
        showError("test");

        const errorEl = document.querySelector("#errors");
        const errorElement = errorEl.querySelector("p");

        expect(errorElement).not.toBeNull();
    })
    it("should add the provided message in the error paragraph", () => {
        const errorMessage = "Test Message"
        showError(errorMessage);

        const errorEl = document.querySelector("#errors");
        const errorElement = errorEl.querySelector("p");

        expect(errorElement.innerHTML).toBe(errorMessage);
    })
    it("should not contain an error paragraph initially", () => {
        const errorEl = document.querySelector("#errors");
        const errorElement = errorEl.querySelector("p");

        expect(errorElement).toBeNull();
    })
})

