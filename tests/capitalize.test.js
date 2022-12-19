import {capitalize} from "../scripts/capitalize";

test("When first letter is not capitalized", () => {
    expect(capitalize("croatia")).toBe("Croatia");
});

test("When first letter is already capitalized", () => {
    expect(capitalize("Japan")).toBe("Japan");
});

test("Maintains case in other letters", () => {
    expect(capitalize("AmERiCa")).toBe("AmERiCa");
});

test("Returns string when first character is invalid", () => {
    expect(capitalize("1452")).toBe("1452");
});
