class AppStrings {

    //routes
    static mainRoute = '/';
    static jokeRoute = '/api/piadas';
    static activityRoute = '/api/atividades';

    //apis
    static activityApiUrl = 'https://www.boredapi.com/api/activity';
    static activityResponseKey = 'activity';
    static typeResponseKey = 'type';
    static paticipantsResponseKey = 'participants';
    static acessibilityResponseKey = 'accessibility';
    static chuckNorrisApiUrl = 'https://api.chucknorris.io/jokes/random';
    static updatedAtResponseKey = 'updated_at';
    static createdAtResponseKey = 'created_at';
    static iconUrlResponseKey = 'icon_url';
    static valueResponseKey = 'value';
    static urlResponseKey = 'url';
    static chuckNorrisLowerCase = /Chuck Norris/g;
    static chuckNorrisUpperCase = 'CHUCK NORRIS';

    //date
    static ptBrDateFormat = 'dd-MM-yyyy';

}

module.exports = AppStrings;