import {calculator} from "../scripts/calculator";

test("Add two integers", () => {
    expect(calculator.add(5, 5)).toBe(10);
});

test("Subtract two integers", () => {
    expect(calculator.subtract(14, 3)).toBe(11);
});

test("Multiply two integers", () => {
    expect(calculator.multiply(33, -3)).toBe(-99);
});

test("Divide two integers", () => {
    expect(calculator.divide(43, 2)).toBeCloseTo(21.5);
})

test("Multiply two floating point numbers", () => {
    expect(calculator.multiply(3.5, 2.1)).toBeCloseTo(7.35);
});

test("Add two floating point numbers", () => {
    expect(calculator.add(3.2, 9.3)).toBeCloseTo(12.5);
});

test("Subtract two floating point numbers", () => {
    expect(calculator.subtract(7.5, 2.1)).toBeCloseTo(5.4);
});

test("Divide two floating point numbers", () => {
    expect(calculator.divide(7.35, 3.5)).toBeCloseTo(2.1);
});