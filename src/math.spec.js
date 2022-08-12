
import { test, it, expect } from "vitest";
import { add } from "./math.js";

it("Add the numbers", () => {

    //ARRANGE
    const numbers = [1, 4, 8, 2];

    //ACT
    let result = add(numbers);

    //ASSERT
    let expectedValue = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    expect(result).toBe(expectedValue);
})


