function Header({ revisados, total }) {
  const porcentagem = Math.round((revisados / total) * 100)

  return (
    <header className="header">
      <div className="header-conteudo">
        <p className="marca">SENAI • DESENVOLVIMENTO DE SISTEMAS</p>
        <h1>React em Prática</h1>
        <p className="subtitulo">Seu guia interativo de revisão</p>

        <div className="progresso-area">
          <div className="progresso-textos">
            <span>Cards revisados</span>
            <strong>{revisados}/{total}</strong>
          </div>
          <div
            className="progresso-trilho"
            role="progressbar"
            aria-label="Progresso da revisão"
            aria-valuemin="0"
            aria-valuemax={total}
            aria-valuenow={revisados}
          >
            <div className="progresso-preenchido" style={{ width: `${porcentagem}%` }} />
          </div>
          <small>{porcentagem}% concluído</small>
        </div>
      </div>
    </header>
  )
}

export default Header
