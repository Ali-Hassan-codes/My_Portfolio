import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // ===== FRONTEND PROJECTS =====
  const projects1 = [
    {
      title: "E-Portal (Flutter App)",
      description: "Flutter + Laravel Integration",
    },
    {
      title: "Job Portal",
      description: "React + Laravel + MySQL",
    },
    {
      title: "Personal Portfolio",
      description: "React.js + EmailJS + Bootstrap",
    },
  ];

  // ===== BACKEND PROJECTS =====
  const projects2 = [
    {
      title: "Laravel REST API",
      description: "Authentication, Sanctum Tokens, CRUD Operations",
    },
    {
      title: "GoLang API",
      description: "Backend API using Go, Bufio, and net/http",
    },
  ];

  // ===== FULL STACK PROJECTS =====
  const projects3 = [
    {
      title: "Oro Tracker",
      description: "Next.js + Go + WebSocket (Live Gold/Silver Rates)",
    },
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

                    <Tab.Content
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
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
