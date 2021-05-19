import "./css/index.css";
import "./css/buttons.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="main">
        <div className="container">
          {/* Menu lateral */}
          <div className="box box-lg-25">
            {" "}
            <Nav />{" "}
          </div>

          {/* Editor de código */}
          <div className="box box-lg-50 box-sm-100">
            <Editor />
            <div className="container">
              <button className="btn btn-dark full-width">
                Visualizar com highlight
              </button>
            </div>
          </div>
          <div className="box box-lg-25"></div>
        </div>
      </div>
    </>
  );
}

export default App;
