const { getActivityApiData } = require('../../controllers/activityApiController');


describe('test activity api Controller', () => {

    it('values of json should be defined', async () => {
        const response = await getActivityApiData();
        expect(response['id']).toBeDefined();
        expect(response['atividade']).toBeDefined();
        expect(response['tipo']).toBeDefined();
        expect(response['participantes']).toBeDefined();
        expect(response['acessibilidade']).toBeDefined();

    });
});
