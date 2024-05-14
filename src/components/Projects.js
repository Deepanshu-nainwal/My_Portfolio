import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/siyaram.png";
import projImg2 from "../assets/img/projects/womens.png";
import Progress from "../assets/img/progress/progress.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "SiyaRam's",
      description:
        "Drawing inspiration from leading e-commerce platforms like Siyaram",
      imgUrl: projImg1,
      demo: "https://645cc253550a2407a7488be7--fabulous-kangaroo-cab540.netlify.app/",
      git: "https://github.com/Deepanshu-nainwal/siyaram-clone",
    },
    {
      title: "Womens",
      description:
        "Drawing inspiration from leading e-commerce platforms like Womens",
      imgUrl: projImg2,
      demo: "https://women-clone.netlify.app/",
      git: "https://github.com/Deepanshu-nainwal/womens",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Inspired by <strong>Womens</strong> and{" "}
                    <strong>Siyaram</strong>
                    <br /> my React.js projects redefine e-commerce with
                    innovative features and intuitive design.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "15px",
                          }}
                        >
                          <h3 style={{ textAlign: "center" }}>
                            Work on Progress..!
                          </h3>
                          <img
                            style={{
                              borderRadius: "20px",
                              maxWidth: "700px",
                            }}
                            src={Progress}
                          />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "15px",
                          }}
                        >
                          <h3 style={{ textAlign: "center" }}>
                            Work on Progress..!
                          </h3>
                          <img
                            style={{
                              borderRadius: "20px",
                              maxWidth: "700px",
                            }}
                            src={Progress}
                          />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
