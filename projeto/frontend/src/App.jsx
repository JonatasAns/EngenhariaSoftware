import { useState } from 'react'
import './App.css'

function App() {
  const [view, setView] = useState('aluno');
  
  // Estados para o Docente (Requisito 2)
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novaUC, setNovaUC] = useState('');
  const [etapaInput, setEtapaInput] = useState('');
  const [listaEtapas, setListaEtapas] = useState([]);

  // Estados para o Aluno (Requisito 1.d, 1.f)
  const [fasesConcluidas, setFasesConcluidas] = useState([]);
  const [chamouDocente, setChamouDocente] = useState(false);

  const adicionarEtapa = () => {
    if (etapaInput.trim()) {
      setListaEtapas([...listaEtapas, etapaInput]);
      setEtapaInput('');
    }
  };

  return (
    <div className="container">
      <nav className="navbar">
        <button className={view === 'aluno' ? 'active' : ''} onClick={() => setView('aluno')}>Estudante</button>
        <button className={view === 'docente' ? 'active' : ''} onClick={() => setView('docente')}>Docente</button>
      </nav>

      {view === 'docente' ? (
        <div className="card">
          <h1>Criar Novo Exercício</h1>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Título do Exercício" 
              value={novoTitulo} 
              onChange={(e) => setNovoTitulo(e.target.value)} 
              data-testid="input-titulo"
            />
            <input 
              type="text" 
              placeholder="Unidade Curricular" 
              value={novaUC} 
              onChange={(e) => setNovaUC(e.target.value)} 
            />
          </div>
          
          <div className="etapa-builder" style={{ marginTop: '20px' }}>
            <input 
              type="text" 
              placeholder="Adicionar uma etapa..." 
              value={etapaInput} 
              onChange={(e) => setEtapaInput(e.target.value)}
              data-testid="input-etapa"
            />
            <button onClick={adicionarEtapa} className="btn-normal" data-testid="btn-add-etapa">+</button>
          </div>

          <ul className="preview-etapas">
            {listaEtapas.map((et, i) => (
              <li key={i}>Etapa {i + 1}: {et}</li>
            ))}
          </ul>

          <button className="btn-finish" onClick={() => alert('Exercício criado!')} disabled={!novoTitulo || listaEtapas.length === 0}>
            Publicar Exercício
          </button>
        </div>
      ) : (
        <div className="card">
          <h1>Portal do Estudante</h1>
          {/* Interface do Aluno que já tinhas construído */}
          <button className="btn-normal" onClick={() => setChamouDocente(true)} data-testid="btn-chamar-docente">
             {chamouDocente ? "A aguardar docente..." : "Chamar Docente"}
          </button>
        </div>
      )}
    </div>
  )
}

export default App