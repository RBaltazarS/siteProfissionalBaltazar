//Imports React Bootstrap.
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div size={12} sm={6} md={4}>
            <button className='btn-project-card' onClick={() => window.open(linkUrl)} _blank >{linkUrl}</button>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard