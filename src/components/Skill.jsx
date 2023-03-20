//Imports React Multi Carousel.
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//Imports React Bootstrap.
import { Container, Row, Col } from "react-bootstrap";

//Imports Assets.

import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"

import bgNoLine from "../assets/img/bgNoLine.svg"

const Skill = () => {

  const responsive = {
    superLargeDesktop: {
      // The Naming Can Be Any, Depends On You. / A Nomenclatura Pode Ser Qualquer Uma.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
                <p>Tecnologias Frontend do ecossistema Javascript que  utilizo  para desenvolver.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                  <div className="item">
                    <img src={meter2} alt="Image Skill" />
                    <h5>JavaScript</h5>
                  </div>

                  <div className="item">
                    <img src={meter2} alt="Image Skill" />
                    <h5>ReactJS</h5>
                  </div>

                  <div className="item">
                    <img src={meter3} alt="Image Skill" />
                    <h5>Bootstrap</h5>
                  </div>

                  <div className="item">
                    <img src={meter2} alt="Image Skill" />
                    <h5>Git</h5>
                  </div>
                </Carousel>
              </h2>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={bgNoLine} />
    </section>
  )
}

export default Skill