//Imports React Bootstrap.
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

//Imports Component.
import  ProjectCard  from "../components/ProjectCard"

//Imports  Assets.

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

const Projects = () => {

  const projects = [
    {
      title: "Youtube",
      description: "VIDEO",
      imgUrl: projImg1,
      linkUrl: "https://www.youtube.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "https://www.youtube.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "https://www.youtube.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      linkUrl: "https://www.youtube.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      linkUrl: "https://www.youtube.com/"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      linkUrl: "https://www.youtube.com/"
    },
  ];


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <h2>Projetos</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projetos Online</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index ) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Projects