import './App.css'

//Bootstrap.
import "bootstrap/dist/css/bootstrap.min.css"

//Component.
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skill />
      <Projects />
      <Footer/>
    </div>
  )
}

export default App
