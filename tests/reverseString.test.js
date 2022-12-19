import {reverseString} from "../scripts/reverseString";

test("Reverses empty string", () => {
    expect(reverseString("")).toBe("");
});

test("Reverses one word", () => {
    expect(reverseString("racecar")).toBe("racecar");
});

test("Reverses string with spaces", () => {
    expect(reverseString("This is reversed.")).toBe(".desrever si sihT");
});