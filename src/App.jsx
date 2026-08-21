import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="grain-overlay animate-grain" />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1c1c26',
            color: '#e8e8f0',
            border: '1px solid #2e2e40',
            fontFamily: '"Space Mono", monospace',
            fontSize: '13px',
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
