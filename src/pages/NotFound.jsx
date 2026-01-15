import { Link } from "react-router-dom";



export default function NotFound(){
  return (
    <main>
      <header className="section">
        <div className="container">
          <h1>404</h1>
          <p>Essa página não existe (ou foi movida).</p>

          <div className="actions">
            <Link className="btn btn--primary" to="/">Voltar para Home</Link>
            <Link className="btn" to="/projects">Ver projetos</Link>
          </div>
        </div>
      </header>
    </main>
  );
}