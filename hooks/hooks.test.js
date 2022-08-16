import { describe, it, expect, beforeAll, beforeEach, afterAll, afterEach } from "vitest";

import { User } from "./hooks";
let testEmail = "initialtest@email.com";
let user = new User(testEmail);


describe("User Class", () => {
    beforeAll(() => {
        testEmail = "initialtest@email.com";
    })
    beforeEach(() => {
        user = new User(testEmail);
    })
    afterEach(() => {
        user = new User(testEmail);
    })

    afterAll(() => {
        user.clearEmail();
    })

    it("should update the email", () => {

        let newTestEmail = "initialtest@email.com";

        user.updateEmail(newTestEmail);

        expect(user.email).toBe(newTestEmail);
    })

    it('should have an email property', () => {
        expect(user).toHaveProperty("email");
    })

    it("should clear the email", () => {
        user.clearEmail();

        expect(user.email).toBe("");
    })

    it("should store the provided email value", () => {
        expect(user.email).toBe(testEmail);
    })


    it("should still have an email property after clearing the email", () => {
        user.clearEmail();

        expect(user).toHaveProperty("email");
    })
})