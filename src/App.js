import CVBuilder from "./Components/CVBuilder";
import "./base.css";
function App() {
  return (
    <div className="App">
      <header>
        <h1>CV Builder</h1>
        <button>Edit Mode</button>
        <button>Preview</button>
      </header>
      <CVBuilder></CVBuilder>
    </div>
  );
}

export default App;
