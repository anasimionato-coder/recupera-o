function CardConceito({
  titulo,
  explicacao,
  exemplo,
  erro,
  revisado,
  aoAlternar,
}) {
  return (
    <article className={`card ${revisado ? 'revisado' : ''}`}>
      <div className="card-topo">
        <h3>{titulo}</h3>
        <span className="status-card">{revisado ? 'Revisado' : 'Pendente'}</span>
      </div>

      <div>
        <h4>O que é?</h4>
        <p>{explicacao}</p>
      </div>

      <div>
        <h4>Exemplo prático</h4>
        <pre><code>{exemplo}</code></pre>
      </div>

      {erro && (
        <div className="erro">
          <h4>Erro comum e correção</h4>
          <p>{erro}</p>
        </div>
      )}

      <button
        type="button"
        className={revisado ? 'botao botao-secundario' : 'botao'}
        onClick={aoAlternar}
        aria-pressed={revisado}
      >
        {revisado ? 'Desmarcar revisão' : 'Marcar como revisado'}
      </button>
    </article>
  )
}

export default CardConceito
