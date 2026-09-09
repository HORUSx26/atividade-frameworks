import { useState } from 'react'
import ItemCard from './components/ItemCard'
import SearchBar from './components/SearchBar'

const initialItems = [
  {
    id: 1,
    title: 'Torto Arado',
    category: 'Romance',
    author: 'Itamar Vieira Junior',
    status: 'Disponível',
    pages: 264,
    color: '#98503b',
  },
  {
    id: 2,
    title: 'Olhos d’Água',
    category: 'Contos',
    author: 'Conceição Evaristo',
    status: 'Emprestado',
    pages: 116,
    color: '#315b58',
  },
  {
    id: 3,
    title: 'O Avesso da Pele',
    category: 'Ficção',
    author: 'Jeferson Tenório',
    status: 'Disponível',
    pages: 192,
    color: '#786130',
  },
  {
    id: 4,
    title: 'A Hora da Estrela',
    category: 'Clássico',
    author: 'Clarice Lispector',
    status: 'Disponível',
    pages: 88,
    color: '#675571',
  },
  {
    id: 5,
    title: 'Ideias para Adiar o Fim do Mundo',
    category: 'Ensaios',
    author: 'Ailton Krenak',
    status: 'Emprestado',
    pages: 96,
    color: '#3b586c',
  },
  {
    id: 6,
    title: 'Quarto de Despejo',
    category: 'Memórias',
    author: 'Carolina Maria de Jesus',
    status: 'Disponível',
    pages: 200,
    color: '#754c52',
  },
]
const categories = [
  'Romance',
  'Contos',
  'Ficção',
  'Ensaios',
  'Clássico',
  'Memórias',
]
const emptyForm = { title: '', author: '', category: 'Romance', pages: '' }

// Permite buscar sem se preocupar com acentos e maiúsculas.
function normalize(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function App() {
  const [items, setItems] = useState(initialItems)
  const [searchTerm, setSearchTerm] = useState('')
  const [newItem, setNewItem] = useState(emptyForm)
  const [notice, setNotice] = useState('')

  const filteredItems = items.filter((item) =>
    normalize(`${item.title} ${item.author} ${item.category}`).includes(
      normalize(searchTerm),
    ),
  )
  const available = items.filter((item) => item.status === 'Disponível').length

  function handleSubmit(event) {
    event.preventDefault()
    const pages = Number(newItem.pages)
    if (!newItem.title.trim() || !newItem.author.trim()) {
      setNotice('Preencha o título e o autor com texto válido.')
      return
    }
    if (!Number.isSafeInteger(pages) || pages < 1) {
      setNotice('Informe uma quantidade inteira de páginas maior que zero.')
      return
    }
    // Cria o livro uma vez; a função de atualização apenas combina os dados.
    const book = {
      ...newItem,
      id: crypto.randomUUID(),
      title: newItem.title.trim(),
      author: newItem.author.trim(),
      pages,
      status: 'Disponível',
      color: '#315b58',
    }
    setItems((current) => [...current, book])
    setNotice(`“${newItem.title.trim()}” adicionado ao acervo.`)
    setNewItem(emptyForm)
    setSearchTerm('')
  }

  function handleRemove(id) {
    setItems((current) => current.filter((item) => item.id !== id))
    setNotice('Livro removido do acervo.')
  }

  // map cria uma nova lista, alterando apenas o livro selecionado.
  function handleToggleStatus(id) {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              status:
                item.status === 'Disponível' ? 'Emprestado' : 'Disponível',
            }
          : item,
      ),
    )
    setNotice('Situação do livro atualizada.')
  }

  return (
    <div className="app-shell">
      <a href="#acervo" className="skip-link">
        Ir para o acervo
      </a>
      <header className="topbar">
        <a href="#" aria-label="Arquivo Aberto, início" className="brand">
          <span className="brand-mark">a.</span>
          <span>
            arquivo
            <br />
            aberto<span className="accent">.</span>
          </span>
        </a>
        <span className="eyebrow header-note">
          Um lugar para suas próximas páginas
        </span>
        <a href="#novo-livro" className="header-link">
          Novo livro ↗
        </a>
      </header>
      <main>
        <section className="intro">
          <div>
            <p className="eyebrow accent">Sua biblioteca, do seu jeito</p>
            <h1>
              Boas histórias
              <br />
              merecem <em>ficar.</em>
            </h1>
          </div>
          <div className="intro-copy">
            <p>
              Entre livros lidos e páginas por descobrir, um espaço para
              organizar as histórias que fazem parte de você.
            </p>
            <div className="stats">
              <div>
                <strong>{items.length}</strong>
                <span>no acervo</span>
              </div>
              <div>
                <strong>{available}</strong>
                <span>disponíveis</span>
              </div>
              <div>
                <strong>{items.length - available}</strong>
                <span>emprestados</span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="acervo"
          className="workspace"
          tabIndex={-1}
          aria-label="Acervo de livros"
        >
          <div className="catalog">
            <div className="catalog-heading">
              <h2>
                Na sua estante <small>/ {filteredItems.length}</small>
              </h2>
              <span className="eyebrow header-note">Coleção pessoal</span>
            </div>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <p className="sr-only" role="status">
              {filteredItems.length} livros encontrados
            </p>
            <div className="items-grid">
              {filteredItems.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onRemove={handleRemove}
                  onToggleStatus={handleToggleStatus}
                />
              ))}
            </div>
            {filteredItems.length === 0 && (
              <div className="empty-state">
                <h3>Uma página em branco.</h3>
                <p>
                  {searchTerm
                    ? 'Nenhum livro encontrado. Experimente outra busca.'
                    : 'Seu acervo está vazio. Adicione seu primeiro livro.'}
                </p>
                {searchTerm && (
                  <button
                    className="text-button"
                    onClick={() => setSearchTerm('')}
                  >
                    Limpar busca
                  </button>
                )}
              </div>
            )}
          </div>
          <aside
            id="novo-livro"
            className="add-panel"
            tabIndex={-1}
            aria-label="Cadastrar livro"
          >
            <p className="eyebrow">Abra espaço para o novo</p>
            <h2>
              Mais um livro.
              <br />
              <em>Outra história.</em>
            </h2>
            <p>
              Cadastre uma leitura e encontre um lugar para ela na sua estante.
            </p>
            <form onSubmit={handleSubmit}>
              <label>
                Título do livro
                <input
                  required
                  pattern=".*\S.*"
                  title="Digite um título que não contenha apenas espaços."
                  maxLength={150}
                  value={newItem.title}
                  onChange={(e) =>
                    setNewItem({ ...newItem, title: e.target.value })
                  }
                  placeholder="Ex.: Grande Sertão: Veredas"
                />
              </label>
              <label>
                Autor ou autora
                <input
                  required
                  pattern=".*\S.*"
                  title="Digite um autor que não contenha apenas espaços."
                  maxLength={100}
                  value={newItem.author}
                  onChange={(e) =>
                    setNewItem({ ...newItem, author: e.target.value })
                  }
                  placeholder="Quem escreveu essa história?"
                />
              </label>
              <label>
                Categoria
                <select
                  value={newItem.category}
                  onChange={(e) =>
                    setNewItem({ ...newItem, category: e.target.value })
                  }
                >
                  {categories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label>
                Quantidade de páginas
                <input
                  type="number"
                  required
                  min="1"
                  max="9007199254740991"
                  step="1"
                  value={newItem.pages}
                  onChange={(e) =>
                    setNewItem({ ...newItem, pages: e.target.value })
                  }
                  placeholder="Ex.: 250"
                />
              </label>
              <button type="submit" className="submit-button">
                Adicionar ao acervo <span aria-hidden="true">+</span>
              </button>
            </form>
            <p role="status" className="notice">
              {notice}
            </p>
            <p className="session-note">
              Novos livros entram como disponíveis. Os dados ficam nesta sessão;
              recarregar restaura a coleção inicial.
            </p>
          </aside>
        </section>
      </main>
      <footer>
        <span>arquivo aberto. © 2026</span>
        <span>Feito para quem encontra mundos nas páginas.</span>
      </footer>
    </div>
  )
}

export default App
