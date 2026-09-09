function ItemCard({ item, onRemove, onToggleStatus }) {
  const isAvailable = item.status === 'Disponível'

  return (
    <article className="book-card">
      <div className="cover" style={{ backgroundColor: item.color }}>
        <span className="eyebrow">{item.category}</span>
        <h3>{item.title}</h3>
        <p>{item.author}</p>
      </div>
      <div className="book-details">
        <span className={`status ${isAvailable ? 'available' : 'borrowed'}`}>
          {item.status}
        </span>
        <span>{item.pages} páginas</span>
      </div>
      <div className="card-actions">
        <button
          type="button"
          className="status-button"
          onClick={() => onToggleStatus(item.id)}
          aria-label={`${isAvailable ? 'Emprestar' : 'Devolver'} ${item.title}`}
        >
          {isAvailable ? 'Emprestar' : 'Devolver'}
        </button>
        <button
          type="button"
          className="text-button"
          onClick={() => onRemove(item.id)}
          aria-label={`Remover ${item.title}`}
        >
          Remover
        </button>
      </div>
    </article>
  )
}

export default ItemCard
