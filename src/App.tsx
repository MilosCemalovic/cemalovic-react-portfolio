import Experience from "./components/Experience/Experience"
import Hero from "./components/Hero/Hero"
import Navigation from "./components/Navigation/Navigation"

const App = () => {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <Experience />
      </main>
    </>
  )
}

export default App
