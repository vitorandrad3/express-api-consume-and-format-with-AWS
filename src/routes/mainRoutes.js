const express = require('express');
const router = express.Router();
const { getChucknorrisApiData } = require('../controllers/chuckNorrisApiController');
const { getActivityApiData } = require('../controllers/activityApiController');
const { errorHandler } = require('../middlewares/errorHandler');
const AppStrings = require('../utils/constants/appStrings');

router.get(AppStrings.mainRoute, (req, res) => {
    res.status(200).send('Esse é o app da Equipe 2');
});

router.get(AppStrings.jokeRoute, async (req, res, next) => {
    try {
        const jokeData = await getChucknorrisApiData();
        res.status(200).json(jokeData);
    } catch (error) {
        next(error);
    }
});

router.get(AppStrings.activityRoute, async (req, res, next) => {
    try {
        const activityData = await getActivityApiData();
        res.status(200).json(activityData);
    } catch (error) {
        next(error);
    }
});

router.use(errorHandler);

module.exports = router;
