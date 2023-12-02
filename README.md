# Objetivo
Consumir e formatar APIs e subindo-as em uma instância na AWS através do Elastic Beanstalk.
O programa também possuí testes de unidade e de integração utilização o pacote ``Jest``

## Como utilizar
2.  Acesse a rota ```api/piadas``` para acessar as piadas.
3.  Acesse a rota ```api/atividades``` para acessar as atividades.

## Estrutura de Pastas
![pastas](https://github.com/vitorandrad3/express-api-consume-and-format-with-AWS/assets/121817324/6bbf80f3-9c19-498b-9226-b18e5c675764)

## Dependências utilizadas
```shell
 "devDependencies": {
    "jest": "^29.6.4",
    "supertest": "^6.3.3",`
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
![image](https://github.com/vitorandrad3/express-api-consume-and-format-with-AWS/assets/121817324/ea179625-79db-4797-b0d8-adf82232714f)

