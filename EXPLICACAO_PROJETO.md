# Explicação do Projeto: Arquivo Aberto


## 1. Visão geral do projeto

O projeto é uma aplicação web desenvolvida com React e Vite para gerenciar um acervo pessoal de livros. A ideia é permitir que o usuário:

- veja os livros disponíveis no acervo;
- busque livros por título, autor ou categoria;
- cadastre novos livros;
- altere o status de disponibilidade/emprestimo;
- remova livros da coleção.

A aplicação foi pensada como uma espécie de biblioteca pessoal, onde cada livro tem informações como título, autor, categoria, quantidade de páginas e situação atual.

## 2. Objetivo da atividade

A atividade tem como objetivo demonstrar o uso de React para construir uma interface interativa com componentes reutilizáveis, manipulação de estados e lógica de formulário.

Além disso, ela permite praticar conceitos como:

- componentização;
- estado local com `useState`;
- filtros e busca na interface;
- validação de inputs;
- atualização dinâmica da interface sem recarregar a página.

## 3. Tecnologias usadas

### React
React é a biblioteca principal do projeto. Ele é usado para montar a interface em componentes e controlar o estado da aplicação.

### Vite
O Vite é usado como ferramenta de build e execução local do projeto. Ele facilita o desenvolvimento com React e gera a versão final da aplicação.

### JavaScript
A lógica da aplicação foi implementada em JavaScript, incluindo a manipulação do estado, filtros, validação e eventos.

### CSS
O visual do projeto foi estilizado com CSS para criar a identidade da interface, incluindo cards de livros, painel de busca, formulário de cadastro e layout geral.

## 4. Estrutura do projeto

```text
atividade-frameworks-main/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── EXPLICACAO_PROJETO.md
├── public/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── ItemCard.jsx
│       └── SearchBar.jsx
└── node_modules/
```

## 5. Explicação por arquivo

### `index.html`
Este arquivo é o ponto de entrada da aplicação web. Ele contém o container principal onde o React vai renderizar a interface.

### `src/main.jsx`
Este arquivo inicializa a aplicação React e monta o componente principal `App` na página.

### `src/App.jsx`
É o arquivo mais importante do projeto. Aqui fica a lógica principal da aplicação.

Ele contém:

- a lista inicial de livros;
- as categorias disponíveis;
- o estado da busca;
- o estado do formulário de cadastro;
- a mensagem de feedback da interface;
- a lógica para filtrar livros;
- a lógica para adicionar, remover e alterar o status de um livro.

### `src/components/SearchBar.jsx`
Este componente é responsável pela barra de busca.

Ele recebe duas props:

- `searchTerm`: texto digitado pelo usuário;
- `onSearchChange`: função para atualizar o valor da busca.

Ele também possui um botão para limpar a busca.

### `src/components/ItemCard.jsx`
Este componente representa cada livro como um card na interface.

Ele recebe:

- `item`: dados do livro;
- `onRemove`: função para remover o livro;
- `onToggleStatus`: função para alterar o status entre disponível e emprestado.

Cada card mostra:

- capa com categoria e título;
- autor;
- número de páginas;
- status do livro;
- botões para emprestar/devolver e remover.

### `src/index.css`
Arquivo de estilos responsáveis pela aparência geral da aplicação, como layout, cores, botões, cards e painel lateral.

## 6. Funcionalidades principais

### a) Listagem de livros
A aplicação inicia com uma coleção de livros predefinida. Cada livro possui:

- id;
- título;
- categoria;
- autor;
- páginas;
- status;
- cor da capa.

### b) Busca
O usuário pode buscar livros por:

- título;
- autor;
- categoria.

A busca ignora acentos e diferenças entre maiúsculas e minúsculas, o que torna a experiência mais amigável.

### c) Cadastro de novos livros
Há um formulário no painel lateral para adicionar um novo livro. O usuário preenche:

- título;
- autor;
- categoria;
- quantidade de páginas.

Antes de adicionar, a aplicação valida:

- se o título e o autor não estão vazios;
- se a quantidade de páginas é um número inteiro maior que zero.

### d) Alternância de status
Cada livro pode estar em dois estados:

- Disponível
- Emprestado

Ao clicar no botão de cada card, o status muda automaticamente.

### e) Remoção de livros
O botão “Remover” exclui o livro da lista atual.

### f) Contador de estatísticas
No topo da página, o aplicativo mostra:

- quantidade total de livros;
- quantidade disponível;
- quantidade emprestada.

## 7. Lógica principal do `App.jsx`

### Estado inicial
O componente `App` usa `useState` para armazenar:

- `items`: lista de livros;
- `searchTerm`: termo da busca;
- `newItem`: dados do formulário para adicionar livro;
- `notice`: mensagem de feedback para o usuário.

### Função `normalize`
Essa função remove acentos e transforma o texto em minúsculo para facilitar a comparação da busca.

### `filteredItems`
Essa constante é responsável por filtrar os livros com base no termo digitado na busca.

### `available`
Essa constante calcula quantos livros estão disponíveis.

### `handleSubmit`
Essa função é executada quando o formulário é enviado.

Ela:

- evita envio com dados inválidos;
- valida páginas;
- cria um novo livro com id único;
- adiciona o item à lista;
- limpa o formulário;
- mostra uma mensagem de confirmação.

### `handleRemove`
Remove um livro da lista conforme o id informado.

### `handleToggleStatus`
Alterna o status de um livro entre disponível e emprestado.

## 8. Fluxo de uso da aplicação

1. O usuário abre a aplicação.
2. Visualiza a lista de livros com status e informações.
3. Pode usar a busca para localizar um livro específico.
4. Pode adicionar novos livros pelo formulário.
5. Pode emprestar ou devolver livros.
6. Pode remover qualquer item do acervo.

## 9. Como executar o projeto

### Instalar dependências
```bash
npm install
```

### Rodar em desenvolvimento
```bash
npm run dev
```

### Gerar build de produção
```bash
npm run build
```

### Pré-visualizar a build
```bash
npm run preview
```

## 10. Observações importantes

- A aplicação funciona com dados em memória durante a sessão atual.
- Ao recarregar a página, os livros voltam para o estado inicial.
- A busca foi pensada para ser mais amigável, sem exigir que o usuário use acentos ou a mesma capitalização.

## 11. Conclusão

Este projeto mostra como criar uma aplicação React simples, mas funcional, com foco em organização de dados e interatividade. Ele representa uma boa prática de uso de componentes, estados e fluxos de interface em aplicações web modernas.

A aplicação pode ser apresentada como uma biblioteca digital pessoal, com recursos de busca, cadastro, alteração de status e organização de informações.
