const { getChucknorrisApiData } = require('../../controllers/chuckNorrisApiController');


describe('test activity api Controller', () => {

    it('values of json should be defined', async () => {
        const response = await getChucknorrisApiData();
        expect(response['data_atualizacao']).toBeDefined();
        expect(response['data_criacao']).toBeDefined();
        expect(response['icone']).toBeDefined();
        expect(response['id']).toBeDefined();
        expect(response['piada']).toBeDefined();
        expect(response['referencia']).toBeDefined();

    });
});
