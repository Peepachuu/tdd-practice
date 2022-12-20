import {analyzeArray} from "../scripts/analyzeArray";

test("Array with 1 element", () => {
    expect(analyzeArray([3])).toStrictEqual({
        average: 3,
        min: 3,
        max: 3,
        length: 1
    });
});

test("Array with the same number", () => {
    expect(analyzeArray([5, 5, 5, 5, 5])).toStrictEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 5
    });
});

test("Normal Array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});