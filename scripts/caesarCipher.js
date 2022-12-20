const letters = "abcdefghijklmnopqrstuvwxyz";

export function caesarCipher(str, shift) {
    let lowercaseStr = str.toLowerCase();
    let encoded = "";

    for (let i = 0; i < str.length; ++i) {
        let encodedLetter = findEquivalent(lowercaseStr[i], shift);
        if (str[i] === str[i].toUpperCase()) {
            encodedLetter = encodedLetter.toUpperCase();
        }
        encoded += encodedLetter;
    }
    return encoded;
}

function findEquivalent(letter, shift) {
    if (!letters.includes(letter))
        return letter;
    const index = letters.indexOf(letter);
    return letters[(index + shift) % 26];
}