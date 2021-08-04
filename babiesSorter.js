const babiesSorter = (a, b) => {

    const aCharCode = a.charCodeAt(0);
    const bCharCode = b.charCodeAt(0);

    const reformatCharCode = (charCode) =>
        charCode >= 96
        ? charCode - 31.5
        : charCode;

    const aValue = reformatCharCode(aCharCode);
    const bValue = reformatCharCode(bCharCode);

    return aValue - bValue;
};

module.exports = babiesSorter;