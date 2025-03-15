import { greet } from "./index";
import { describe, expect, test } from "vitest";

describe("greet function", () => {
    test("should return a greeting message", () => {
        expect(greet("Alice")).toBe("Hello, Alice!");
        expect(greet("Bob")).toBe("Hello, Bob!");
    });
});
