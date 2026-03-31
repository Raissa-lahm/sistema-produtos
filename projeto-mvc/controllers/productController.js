// importa o model (onde ficam os dados e regras)
const Product = require('../models/productModel');

// LISTAR PRODUTOS (READ do CRUD)
exports.listar = (req, res) => {
  // busca todos os produtos no model
  const produtos = Product.getAll();

  // renderiza a view "produtos.ejs" e envia os dados
  // { produtos } = variável que a view vai usar
  res.render('produtos', { produtos });
};

// CRIAR PRODUTO (CREATE do CRUD)
exports.criar = (req, res) => {
  // pega os dados do formulário (vem do body)
  const { nome, preco } = req.body;

  // envia os dados para o model salvar
  Product.add({ nome, preco });

  // redireciona para a lista de produtos
  res.redirect('/produtos');
};

// DELETAR PRODUTO (DELETE do CRUD)
exports.deletar = (req, res) => {
  // pega o id pela URL (params)
  const id = req.params.id;

  // remove o produto no model
  Product.delete(id);

  // volta para a lista
  res.redirect('/produtos');
};

// MOSTRAR FORMULÁRIO DE EDIÇÃO
exports.editarForm = (req, res) => {
  // pega o id da URL
  const id = req.params.id;

  // busca o produto específico
  const produto = Product.getById(id);

  // renderiza a tela de edição com os dados preenchidos
  res.render('editar', { produto, id });
};

// ATUALIZAR PRODUTO (UPDATE do CRUD)
exports.atualizar = (req, res) => {
  const id = req.params.id;

  // pega os novos dados do formulário
  const { nome, preco } = req.body;

  // atualiza o produto no model
  Product.update(id, { nome, preco });

  // redireciona para a lista atualizada
  res.redirect('/produtos');
};