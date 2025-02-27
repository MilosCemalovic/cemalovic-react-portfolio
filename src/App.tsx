import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import Navigation from "./components/Navigation/Navigation"
import Skills from "./components/Skills/Skills"

const App = () => {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Experience />
        <Skills />
      </main>
    </>
  )
}

export default App
