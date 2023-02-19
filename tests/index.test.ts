import Evaluate from "../src/index";

describe("Evaluate()", () => {
    test("should return true when passing an empty string", () => {
        expect(Evaluate("")).toBe(true);
    });
});
