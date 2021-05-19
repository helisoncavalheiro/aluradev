import "./css/index.css";
import Header from "./components/Header";
import Editor from "./components/Editor";

function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <div className="box box-lg-25"></div>
        <div className="box box-lg-50 box-sm-100">
          <Editor />
        </div>
        <div className="box box-lg-25"></div>
      </div>
    </>
  );
}

export default App;
