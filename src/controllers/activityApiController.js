const axios = require('axios');
const { percentFormater } = require('../utils/convertToPercent');
const { v4: generateId } = require('uuid');
const AppStrings = require('../utils/constants/appStrings');

async function getActivityApiData() {
    const response = await axios.get(AppStrings.activityApiUrl);
    const apiData = response.data;
    const apiHandled = {
        'id': generateId(),
        'atividade': apiData[AppStrings.activityResponseKey],
        'tipo': apiData[AppStrings.typeResponseKey],
        'participantes': apiData[AppStrings.paticipantsResponseKey],
        'acessibilidade': percentFormater(apiData[AppStrings.acessibilityResponseKey])
    };
    return apiHandled;
}

module.exports = { getActivityApiData };
