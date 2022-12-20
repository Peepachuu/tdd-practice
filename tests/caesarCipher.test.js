import {caesarCipher} from "../scripts/caesarCipher";

test("Encoding str with upper and lower case", () => {
    expect(caesarCipher("This iS A sEnTeNcE", 7)).toBe("Aopz pZ H zLuAlUjL");
});

test("Encoding str with punctuation", () => {
    expect(caesarCipher("sam's leg has healed!", 15)).toBe("hpb'h atv wph wtpats!");
});

test("Wrapping from z to a", () => {
    expect(caesarCipher("defend the east wall", 25)).toBe("cdedmc sgd dzrs vzkk");
});