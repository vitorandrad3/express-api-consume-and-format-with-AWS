# Objetivo
Consumir e formatar APIs e subindo-as em uma instância na AWS através do Elastic Beanstalk.

## Como utilizar
2.  Acesse a rota ```api/piadas``` para acessar as piadas.
3.  Acesse a rota ```api/atividades``` para acessar as atividades.

## Estrutura de Pastas

## Dependências utilizadas
```shell
 "devDependencies": {
    "jest": "^29.6.4",
    "supertest": "^6.3.3",
    "eslint": "^8.47.0",
    "nodemon": "^3.0.1"
  },
  "dependencies": {
    "axios": "^1.5.0",
    "date-fns": "^2.30.0",
    "express": "^4.18.2",
    "uuid": "^9.0.0"
  }

```
## Desenvolvimento
- Primeiramente foi desenvolvido as rotas através do axios;
- Depois foi desenvolvido os controllers com os conteúdos das APIs;
- Refatoramento do código e desenvolvimento de testes unitários;
- Por fim, realizamos o deploy da aplicação na AWS utilzando o Elastic Beanstalk.

## Diagrama de arquitetura

