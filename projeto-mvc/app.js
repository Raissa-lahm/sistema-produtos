const express = require('express');
const path = require('path');
const app = express();

// define o EJS como motor de visualização
app.set('view engine', 'ejs');

// permite receber dados de formulário (req.body)
app.use(express.urlencoded({ extended: true }));

// define a pasta "public" para arquivos estáticos (CSS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// importa as rotas de produtos
const productRoutes = require('./routes/productRoutes');

// ROTAS PRINCIPAIS (páginas simples)
app.get('/', (req, res) => res.render('home'));
app.get('/sobre', (req, res) => res.render('sobre'));
app.get('/contato', (req, res) => res.render('contato'));

// RECEBE DADOS DO FORMULÁRIO DE CONTATO
app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;

  // apenas exibe no terminal (simulação de envio)
  console.log('--- NOVA MENSAGEM ---');
  console.log('Nome:', nome);
  console.log('Email:', email);
  console.log('Mensagem:', mensagem);

  res.send('Mensagem enviada com sucesso!');
});

// conecta as rotas de produtos ao sistema
app.use('/produtos', productRoutes);

// inicia o servidor
app.listen(3001, () => {
  console.log('Servidor rodando em http://localhost:3001');
});