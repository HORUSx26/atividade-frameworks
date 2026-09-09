function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-panel">
      <label htmlFor="search" className="sr-only">
        Buscar por título, autor ou categoria
      </label>
      <input
        id="search"
        type="search"
        placeholder="Busque por título, autor ou categoria..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      {searchTerm && (
        <button
          type="button"
          onClick={() => onSearchChange('')}
          aria-label="Limpar busca"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBar
