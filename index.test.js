const { herdBabies } = require('./index');
const { test, expect } = require('@jest/globals');

test("Returns an empty string when passed an empty string", () => {
    const babies = "";
    const expectedOutput = "";

    const herdedBabies = herdBabies(babies);

    expect(herdedBabies).toBe(expectedOutput);
});

test("Returns a populated string when passed a populated string", () => {
    const babies = "a";
    const expectedOutput = "a";

    const herdedBabies = herdBabies(babies);

    expect(herdedBabies).toBe(expectedOutput);
});

test("Returns a string of alphabetised characters when passed a string", () => {
    const babies = "cabd";
    const expectedOutput = "abcd";

    const herdedBabies = herdBabies(babies);

    expect(herdedBabies).toBe(expectedOutput);
});

test("Returns uppercase character first when passed a lowercase and uppercase character of the same letter.", () => {
    const babies = "aA";
    const expectedOutput = "Aa";

    const herdedBabies = herdBabies(babies);

    expect(herdedBabies).toBe(expectedOutput);
});

test("Returns a string with like letters groups together, with uppercase characters first within these sets, eg. 'AAaaBbCcc'", () => {
    const babies = 'bCAaBcAac';
    const expectedOutput = 'AAaaBbCcc';

    const herdedBabies = herdBabies(babies);

    expect(herdedBabies).toBe(expectedOutput);
});
