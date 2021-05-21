import "./css/index.css";
import "./css/buttons.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <div className="main">
          {/* Menu lateral */}
          <div className="sidebar">
            {" "}
            <Nav />{" "}
          </div>
          {/* Editor de código */}
          <div className="content">
              <Editor />
              <div className="row">
                <div className="container">
                  <button className="btn btn-dark full-width">
                    Visualizar com highlight
                  </button>
                </div>
              </div>
          </div>
          {/* Form do projeto */}
          <div className="form">
            <p className="sidebar-title">Seu projeto</p>
            <form>
              <input className="form-control" placeholder="Nome do seu projeto"/>
              <textarea className="form-control" rows="3" placeholder="Descrição do seu projeto" />
              <p className="sidebar-title" >Personalização</p>
              <div className="personalizacao">
                <select className="form-control">
                  <option>Javascript</option>
                  <option>Java</option>
                  <option>PHP</option>
                  <option>Python</option>
                  <option>Ruby</option>
                  <option>Go</option>
                  <option>Delphi</option>
                  <option>C</option>
                  <option>C#</option>
                  <option>Fortran</option>
                  <option>Assembly</option>
                </select>

                <input type="color" className="form-control color-picker" />

              </div>
              <button className="btn btn-light full-width" >Salvar projeto</button>
            </form>
          </div>
      </div>
    </>
  );
}

export default App;
