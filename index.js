const babiesSorter = require('./babiesSorter');

const herdBabies = (babies) => {
    return babies.split("")
    .sort((a, b) => babiesSorter(a, b))
    .join("");
};

module.exports = herdBabies;
