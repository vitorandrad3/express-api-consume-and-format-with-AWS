const request = require('supertest');
const app = require('../../server');

describe('test app routes', () => {

    it('should get main route', async () => {
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Esse é o app da Equipe 2');
    });

    it('should get activity route', async () => {
        const response = await request(app).get('/api/atividades');

        expect(response.statusCode).toBe(200);
        expect(response.body['id']).toBeDefined();
        expect(response.body['atividade']).toBeDefined();
        expect(response.body['tipo']).toBeDefined();
        expect(response.body['participantes']).toBeDefined();
        expect(response.body['acessibilidade']).toBeDefined();
    });

    it('should get joke route', async () => {
        const response = await request(app).get('/api/piadas');

        expect(response.statusCode).toBe(200);
        expect(response.body['data_atualizacao']).toBeDefined();
        expect(response.body['data_criacao']).toBeDefined();
        expect(response.body['icone']).toBeDefined();
        expect(response.body['id']).toBeDefined();
        expect(response.body['piada']).toBeDefined();
        expect(response.body['referencia']).toBeDefined();
    });

});
