function percentFormater(percentUnformated) {
    const percentFormated = `${parseFloat(percentUnformated) * 100}%`;
    return percentFormated;
}

module.exports = { percentFormater };