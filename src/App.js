import "./css/index.css";
import "./css/buttons.css";
import Header from "./components/Header";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <div className="main">
          <div className="box box-lg-25">
            <div style={{height: '100%'}}></div>
          </div>
          <div className="box box-lg-50 box-sm-100">
            <Editor />
            <div className="container">
              <button className="btn btn-dark full-width">Visualizar com highlight</button>
            </div>
          </div>
          <div className="box box-lg-25"></div>
        </div>
      </div>
    </>
  );
}

export default App;
