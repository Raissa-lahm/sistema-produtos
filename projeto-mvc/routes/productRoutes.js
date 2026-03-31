const express = require('express');

// cria um "mini servidor" de rotas
const router = express.Router();

// importa o controller
const productController = require('../controllers/productController');

// LISTAR produtos (acessar página)
router.get('/', productController.listar);

// CRIAR produto (formulário envia POST)
router.post('/', productController.criar);

// DELETAR produto (usa id na URL)
router.post('/deletar/:id', productController.deletar);

// ROTAS DE EDIÇÃO

// abre a página de edição
router.get('/editar/:id', productController.editarForm);

// salva a edição
router.post('/editar/:id', productController.atualizar);

// exporta as rotas para usar no app.js
module.exports = router;