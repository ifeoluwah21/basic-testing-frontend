import { describe, it, expect } from "vitest";

import { User } from "./hooks";


describe("User Class", () => {
    it("should update the email", () => {
        let initialTestEmail = "initialtest@email.com";
        let newTestEmail = "initialtest@email.com";

        const user = new User(initialTestEmail);

        user.updateEmail(newTestEmail);

        expect(user.email).toBe(newTestEmail);
    })

    it('should have an email property', () => {
        let testEmail = "test@email.com";
        const user = new User(testEmail);

        expect(user).toHaveProperty("email");
    })

    it("should store the provided email value", () => {
        let testEmail = "test@email.com";

        const user = new User(testEmail);

        expect(user.email).toBe(testEmail);
    })
    it("should clear the email", () => {
        let testEmail = "test@email.com";

        const user = new User(testEmail);
        user.clearEmail();

        expect(user.email).toBe("");
    })

    it("should still have an email property after clearing the email", () => {
        let testEmail = "test@email.com";

        const user = new User(testEmail);
        user.clearEmail();

        expect(user).toHaveProperty("email");
    })
})