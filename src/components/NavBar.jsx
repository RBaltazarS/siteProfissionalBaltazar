//Imports React Bootstrap.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Hooks.
import { useState, useEffect } from 'react';

//Imagens.
import logo from "../assets/img/logo.svg"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon3 from "../assets/img/nav-icon3.svg"

const NavBar = () => {

  const [activeLink, setActiveLink] = useState("home")
  const [scrolled, setScrolled] = useState("false")


  //Effects Para Mudar O Background.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  //Constancia Usada Para Definir Qual Link Esta Ativo.
  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("project")}>Projetos</Nav.Link>
            <Nav.Link href="https://api.whatsapp.com/send?phone=5571992781219&text=Ol%C3%A1,%20tenho%20uma%20proposta%20para%20voce." target="_blank" className={activeLink === "contact" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink()}>WhatsApp</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/rodolpho-baltazar-47000b38/" target="_blank"><img src={navIcon1}/></a>
              <a href="https://www.instagram.com/baltazarbjj/" target="_blank"><img src={navIcon3}/></a>
            </div>
            <button className='connect' onClick={() => window.open("https://github.com/RBaltazarS")} _blank >
              <span>Vamos Nos Conectar</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar