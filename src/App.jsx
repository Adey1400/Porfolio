import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import About from './components/about'
import Home from './components/Home'
import Skills from './components/skills'
import Contact from './components/contact'
import Projects from './components/project'
import Certificates from './components/certificates'
function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
    <div>
      <Navbar/>
 <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects/></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact/></section>
      </main>
    </div>
    </>
  )
}

export default App
