import './App.css'
import AboutMe from './components/AboutMe'
import Contato from './components/Contate-me'
import Projetos from './components/Projetos'
import Header from './components/header'
import Me from './components/me'
import Skills from './components/skills'

function App() {

  return (
    <>
      <Header/>
      <Me/>
      <AboutMe/>
      <Skills/>
      <Projetos/>
      <Contato/>
    </>
  )
}

export default App
