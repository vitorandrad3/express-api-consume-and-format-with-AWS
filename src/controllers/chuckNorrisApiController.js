const axios = require('axios');
const { dateFormater } = require('../utils/formatToPtbrDate');
const { v4: generateId } = require('uuid');
const AppStrings = require('../utils/constants/appStrings');

async function getChucknorrisApiData() {

    const response = await axios.get(AppStrings.chuckNorrisApiUrl);

    console.log(response);
    const apiData = response.data;
    const apiHandled = {
        'data_atualizacao': dateFormater(apiData[AppStrings.updatedAtResponseKey]),
        'data_criacao': dateFormater(apiData[AppStrings.createdAtResponseKey]),
        'icone': apiData[AppStrings.iconUrlResponseKey],
        'id': generateId(),
        'piada': apiData[AppStrings.valueResponseKey].replace(AppStrings.chuckNorrisLowerCase, AppStrings.chuckNorrisUpperCase),
        'referencia': apiData[AppStrings.urlResponseKey]
    };
    return apiHandled;

}

module.exports = {  getChucknorrisApiData };

