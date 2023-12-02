const express = require('express');
const AppStrings = require('./utils/constants/appStrings');
const app = express();
const router = require('./routes/mainRoutes');

app.use(AppStrings.mainRoute, router);

module.exports = app;