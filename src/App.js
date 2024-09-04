import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Project from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <section id="Home">
          <Home />
        </section>
        <section id="About">
          <About />
        </section>
        <section id="Project">
          <Project />
        </section>
        <section id="Contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
