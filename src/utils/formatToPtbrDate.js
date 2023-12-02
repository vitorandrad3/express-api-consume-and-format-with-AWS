const { parseISO, format } = require('date-fns');
const AppStrings = require('../utils/constants/appStrings');

function dateFormater(dateUnformated) {
    const newDate = parseISO(dateUnformated);
    const formatedDate = format(newDate, AppStrings.ptBrDateFormat);
    return formatedDate;
}

module.exports = { dateFormater };