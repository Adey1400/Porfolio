import { useState, useEffect } from 'react'
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
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
           (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;
    if (darkMode) {
      root.classList.add('dark');
      body.classList.add('dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      root.style.colorScheme = 'light';
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects/></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact/></section>
      </main>
    </div>
  );
}

export default App
