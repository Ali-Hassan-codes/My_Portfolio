import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

// Images
import orotrackerImg from "../assets/img/orotracker.png";
import rmsImg from "../assets/img/rms.png";
import purecarImg from "../assets/img/purecar.png";
import news from "../assets/img/news.png";
import logisticsImg from "../assets/img/logistics.png";

export const Projects = () => {
  // ===== FRONTEND PROJECTS =====
  const projects1 = [
    {
      title: "Car.Euro.UK",
      description: "Project for buying and selling cars in the UK using Lravel and Bootstrap",
      imgUrl: purecarImg,
    },
    {
      title: "News App",
      description: "A Website to get latest news using React.js + NewsAPI",
      imgUrl: news,
    },  
  ];

  // ===== BACKEND PROJECTS =====
  const projects2 = [
    {
      title: "Logistics Management",
      description: "Logistics system backend project using Node.js + MongoDB",
      imgUrl: logisticsImg,
    },
  ];

  // ===== FULL STACK PROJECTS =====
  const projects3 = [
    {
      title: "Oro Tracker",
      description: "Next.js + Go + WebSocket: Live Gold & Silver prices",
      imgUrl: orotrackerImg,
    },
    {
      title: "RMS-MS",
      description: "Laravel + MySQL + Next: Manage MS & PhD students’ FYPs with role-based dashboards",
      imgUrl: rmsImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Projects</h2>
                  <p>
                    I have built multiple applications using Flutter, Laravel,
                    React.js, and Go, focusing on real-world solutions and clean
                    architecture.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Frontend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Backend</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">FullStack</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
