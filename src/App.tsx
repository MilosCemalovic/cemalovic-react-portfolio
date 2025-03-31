import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import Navigation from "./components/Navigation/Navigation"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Contact from "./components/Contact/Contact"

const App = () => {
  return (
    <div data-testid="app">
      <Navigation />

      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <About />
      </main>

      <Contact />
    </div>
  )
}

export default App
