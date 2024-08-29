import Nav from "./components/nav"
import Home from "./components/home"
import About from "./components/about"
import Project from "./components/projects";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <div>
          <Home />
          <About />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
