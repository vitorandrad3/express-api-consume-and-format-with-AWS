const app = require('./server');
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`);
});