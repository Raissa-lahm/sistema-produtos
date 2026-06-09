# Sistema de Produtos com Node.js 🛒

Um sisteminha de gerenciamento de produtos feito com Node.js, Express e EJS, seguindo a arquitetura MVC. Projeto desenvolvido para praticar back-end com Node e entender melhor como separar as responsabilidades entre Model, View e Controller.

## Tecnologias

- Node.js
- Express
- EJS (template engine)
- CSS puro

## O que dá pra fazer

- Adicionar produtos (nome e preço)
- Editar produtos cadastrados
- Deletar produtos
- Página de contato (os dados aparecem no terminal mesmo, é só pra simular)

## Como rodar

Precisa ter o Node.js instalado na máquina.

```bash
# clone o repositório
git clone https://github.com/Raissa-lahm/sistema-produtos.git

# entra na pasta
cd sistema-produtos/projeto-mvc

# instala as dependências
npm install

# roda o projeto
node app.js
```

Acesse no navegador: http://localhost:3001

## Estrutura de pastas

```
projeto-mvc/
├── app.js
├── controllers/
│   └── productController.js
├── models/
│   └── productModel.js
├── routes/
│   └── productRoutes.js
├── views/
│   ├── home.ejs
│   ├── produtos.ejs
│   ├── editar.ejs
│   ├── contato.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
└── public/
    └── css/
        └── style.css
```

## Observação

Os dados ficam salvos em memória (num array), então quando o servidor reinicia tudo some. É um projeto de estudos, então tá de boa por enquanto haha
