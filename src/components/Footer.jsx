import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rodolpho-baltazar-47000b38/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/baltazarbjj/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>👨🏻‍💻 CodeWebTips Copyright 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer