import About from "./components/About";
import Contact from "./components/contact";
import Main from "./components/main";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import ObserverProvider from "../observer";

export default function Home() {
  return (
    <main>
      <ObserverProvider>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </ObserverProvider>
    </main>
  );
}
