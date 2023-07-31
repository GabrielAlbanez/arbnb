//arquivo so para rodar o server e ele vai chamrar o app
const app = require('./app');
require('dotenv').config();

const porta = process.env.PORT || 3333;

app.listen(porta, () => {
  console.log(`Server rodando porta : ${porta}`)
})
