import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div>
        <Nav />
        <div>
          <Home />
          <About />
          <section id="Project">
            <Project />
          </section>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
