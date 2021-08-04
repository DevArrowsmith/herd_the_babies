const herdBabies = (babies) => {

    const sortBabiesFunction = (a, b) => {

        const aCharCode = a.charCodeAt(0);
        const bCharCode = b.charCodeAt(0);

        const aValue = aCharCode >= 96
        ? aCharCode - 31.5
        : aCharCode;

        const bValue = bCharCode >= 96
        ? bCharCode - 31.5
        : bCharCode;

        return aValue - bValue;
    };

    const babiesArray = babies.split("");

    const alphabetisedBabies = babiesArray.sort((a, b) => sortBabiesFunction(a, b));

    const babiesString = alphabetisedBabies.join("");

    return babiesString;

};

module.exports = { herdBabies };
