import { useState } from 'react'

function ListaDuvidas() {
  const [texto, setTexto] = useState('')
  const [duvidas, setDuvidas] = useState([])
  const [erro, setErro] = useState('')

  function adicionarDuvida(evento) {
    evento.preventDefault()

    const duvidaLimpa = texto.trim()

    if (duvidaLimpa === '') {
      setErro('Digite sua dúvida antes de adicionar.')
      return
    }

    setDuvidas((anteriores) => [
      ...anteriores,
      { id: `${Date.now()}-${anteriores.length}`, texto: duvidaLimpa },
    ])
    setTexto('')
    setErro('')
  }

  return (
    <section className="duvidas" aria-labelledby="titulo-duvidas">
      <div className="duvidas-cabecalho">
        <p className="etiqueta">ANOTAÇÕES</p>
        <h2 id="titulo-duvidas">Minhas dúvidas</h2>
        <p>Escreva o que você ainda precisa estudar. Sua lista aparece logo abaixo.</p>
      </div>

      <form className="form-duvida" onSubmit={adicionarDuvida}>
        <label htmlFor="campo-duvida">Nova dúvida</label>
        <div className="campo-acoes">
          <input
            id="campo-duvida"
            type="text"
            value={texto}
            onChange={(evento) => {
              setTexto(evento.target.value)
              if (erro) setErro('')
            }}
            placeholder="Ex.: Qual é a diferença entre props e state?"
            aria-describedby={erro ? 'mensagem-erro' : undefined}
          />
          <button className="botao" type="submit">Adicionar dúvida</button>
        </div>
        {erro && <p className="mensagem-erro" id="mensagem-erro">{erro}</p>}
      </form>

      {duvidas.length > 0 ? (
        <ul className="lista-duvidas">
          {duvidas.map((duvida) => (
            <li key={duvida.id}>{duvida.texto}</li>
          ))}
        </ul>
      ) : (
        <p className="sem-duvidas">Nenhuma dúvida adicionada ainda.</p>
      )}
    </section>
  )
}

export default ListaDuvidas
