import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, demo, git }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => window.open(demo)}
              className="tagline"
            >
              Launch
            </span>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => window.open(git)}
              className="tagline"
            >
              Github
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};
