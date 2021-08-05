const CHARACTER_CODE_OF_a = 97
const DIFFERENCE_BETWEEN_UPPER_AND_LOWER_CASE_CHARACTER_CODES_PLUS_HALF = 31.5

const babiesSorter = (a, b) => {

    const aCharCode = a.charCodeAt(0);
    const bCharCode = b.charCodeAt(0);

    const reformatCharCode = (charCode) =>
        charCode >= CHARACTER_CODE_OF_a
        ? charCode - DIFFERENCE_BETWEEN_UPPER_AND_LOWER_CASE_CHARACTER_CODES_PLUS_HALF
        : charCode;

    const aValue = reformatCharCode(aCharCode);
    const bValue = reformatCharCode(bCharCode);

    return aValue - bValue;
};

module.exports = babiesSorter;