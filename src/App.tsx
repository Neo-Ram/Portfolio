import "./App.css";
import Header from "./components/layoud/Header";
import Welcome from "./sections/Welcome";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
