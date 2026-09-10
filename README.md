# Arquivo Aberto

Aplicação web desenvolvida como atividade de frameworks para gerenciar um acervo pessoal de livros. A interface permite buscar, cadastrar, emprestar/devolver e remover livros de uma coleção organizada por categoria.

## Objetivo da atividade

O projeto tem como objetivo demonstrar a utilização de React para a construção de uma interface dinâmica e interativa, aplicando conceitos de componentes, estado local, manipulação de listas e validação de formulários.

## Funcionalidades

- Lista de livros com título, autor, categoria, número de páginas e status
- Busca por título, autor ou categoria
- Cadastro de novos livros no acervo
- Validação de campos do formulário
- Alternância entre status disponível e emprestado
- Remoção de itens do catálogo
- Estado visual para acervo vazio
- Layout responsivo e visualmente organizado

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS

## Estrutura do projeto

```text
atividade-frameworks-main/
├── index.html
├── package.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── ItemCard.jsx
│       └── SearchBar.jsx
└── README.md
```

## Como executar

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Inicie a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

4. Acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```
Executa a aplicação em ambiente de desenvolvimento.

```bash
npm run build
```
Gera a build de produção do projeto.

```bash
npm run preview
```
Serve a build gerada localmente para pré-visualização.

## Observações importantes

- A aplicação foi construída para funcionar com dados em memória durante a sessão atual.
- Ao recarregar a página, a coleção inicial do acervo é restaurada.
- A busca ignora acentos e diferenças entre maiúsculas e minúsculas, proporcionando uma experiência mais amigável ao usuário.

## Integrantes do grupo

- Gabriel Siqueira
- Kauã Rezende
- João Gabriel Reis

## Entrega

Este projeto foi desenvolvido como uma atividade prática de frameworks, com foco na criação de uma interface funcional para organização de um acervo bibliográfico, utilizando React e Vite.

## Autor

Projeto desenvolvido para fins de atividade acadêmica.
