// array que armazena os produtos (simulando um banco de dados)
let produtos = [];

module.exports = {

  // retorna todos os produtos
  getAll: () => produtos,

  // adiciona um novo produto no array
  add: (produto) => {
    produtos.push(produto);
  },

  // remove um produto pelo índice (id)
  delete: (id) => {
    produtos.splice(id, 1);
  },

  // busca um produto específico pelo índice
  getById: (id) => {
    return produtos[id];
  },

  // atualiza um produto existente
  update: (id, novoProduto) => {
    produtos[id] = novoProduto;
  }
};