import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CardConceito from './components/CardConceito'
import ListaDuvidas from './components/ListaDuvidas'

const conteudos = [
  {
    id: 1,
    titulo: 'Git e GitHub',
    explicacao: 'Git guarda o histórico do projeto no computador. GitHub é a plataforma onde o repositório pode ficar online. Commit registra uma versão, push envia as alterações e branch cria uma linha separada de trabalho.',
    exemplo: 'git add .\ngit commit -m "primeiro commit"\ngit push origin main',
    erro: 'Erro: achar que o commit já envia o projeto ao GitHub.\nCorreção: depois do commit, use git push para enviar as alterações.',
  },
  {
    id: 2,
    titulo: 'Node.js e npm',
    explicacao: 'Node.js permite executar JavaScript fora do navegador. npm é o gerenciador usado para instalar e administrar pacotes do projeto.',
    exemplo: 'npm install\nnpm run dev',
    erro: 'Erro: tentar executar comandos npm em uma pasta que não contém o projeto.\nCorreção: abra o terminal na pasta que contém o package.json.',
  },
  {
    id: 3,
    titulo: 'React e JSX',
    explicacao: 'React é uma biblioteca JavaScript usada para criar interfaces. JSX permite escrever uma estrutura parecida com HTML dentro do JavaScript.',
    exemplo: '<h1 className="titulo">Olá!</h1>',
    erro: 'Erro: usar class em JSX.\nCorreção: use className, que é a propriedade correspondente no React.',
  },
  {
    id: 4,
    titulo: 'Componentes e props',
    explicacao: 'Componente é uma parte reutilizável da interface, geralmente criada como uma função. Props são informações enviadas por um componente pai para um componente filho.',
    exemplo: 'function Saudacao({ nome }) {\n  return <p>Olá, {nome}!</p>\n}',
    erro: 'Erro: começar o nome do componente com letra minúscula.\nCorreção: use a primeira letra maiúscula, como Saudacao.',
  },
  {
    id: 5,
    titulo: 'Estado e Hooks',
    explicacao: 'useState guarda informações que podem mudar durante o uso da página. Quando o novo estado depende do anterior, a atualização funcional ajuda a usar o valor mais recente.',
    exemplo: 'const [contador, setContador] = useState(0)\nsetContador((anterior) => anterior + 1)',
    erro: 'Erro: alterar diretamente a variável de estado.\nCorreção: use a função atualizadora, como setContador.',
  },
  {
    id: 6,
    titulo: 'Eventos e validação',
    explicacao: 'Eventos como onClick respondem às ações da pessoa usuária. O método trim() remove espaços do começo e do final de um texto, ajudando a validar campos vazios.',
    exemplo: '<button onClick={salvar}>Salvar</button>\nif (texto.trim() === "") return',
    erro: 'Erro: escrever onClick={salvar()} quando a intenção é executar ao clicar.\nCorreção: passe a função sem chamá-la: onClick={salvar}.',
  },
  {
    id: 7,
    titulo: 'Listas e imutabilidade',
    explicacao: 'map() percorre um array e cria elementos para a interface. Cada elemento precisa de uma key estável. Para atualizar arrays no estado, crie um novo array em vez de alterar o existente.',
    exemplo: 'setLista((anterior) => [...anterior, novoItem])\nlista.map((item) => <li key={item.id}>{item.nome}</li>)',
    erro: 'Erro: usar push() diretamente no array do estado.\nCorreção: crie um novo array com spread, filter() ou map().',
  },
  {
    id: 8,
    titulo: 'Arquitetura web',
    explicacao: 'Frontend é a parte da aplicação com que a pessoa interage. Backend processa regras e dados no servidor. API permite a comunicação entre sistemas. localStorage guarda dados no navegador. SPA atualiza o conteúdo sem recarregar a página inteira; PWA pode oferecer recursos de instalação e uso offline.',
    exemplo: 'localStorage.setItem("nome", "Ana")\nconst nome = localStorage.getItem("nome")',
    erro: '',
  },
]

function App() {
  const [revisados, setRevisados] = useState([])

  function alternarRevisao(id) {
    setRevisados((anteriores) =>
      anteriores.includes(id)
        ? anteriores.filter((itemId) => itemId !== id)
        : [...anteriores, id]
    )
  }

  return (
    <>
      <Header revisados={revisados.length} total={conteudos.length} />
      <main className="conteudo-principal">
        <section className="introducao" aria-labelledby="titulo-conteudos">
          <p className="etiqueta">GUIA DE ESTUDOS • REACT</p>
          <h2 id="titulo-conteudos">Conceitos importantes</h2>
          <p>Leia cada card, observe o exemplo e marque quando terminar a revisão.</p>
        </section>

        <section className="grid" aria-label="Cards de estudo">
          {conteudos.map((conteudo) => (
            <CardConceito
              key={conteudo.id}
              {...conteudo}
              revisado={revisados.includes(conteudo.id)}
              aoAlternar={() => alternarRevisao(conteudo.id)}
            />
          ))}
        </section>

        <ListaDuvidas />
      </main>
      <footer className="rodape">
        <p>React em Prática — Guia Interativo de Estudos</p>
      </footer>
    </>
  )
}

export default App
