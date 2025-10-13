import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import flutterApp from "../assets/img/flutter_app.jpg";
import jobPortal from "../assets/img/job_portal.jpg";
import ePortal from "../assets/img/e_portal.jpg";
import laravelBackend from "../assets/img/laravel_backend.jpg";
import goApi from "../assets/img/go_api.jpg";
import fullStackTracker from "../assets/img/oro_tracker.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // ===== FRONTEND PROJECTS =====
  const projects1 = [
    {
      title: "E-Portal (Flutter App)",
      description: "Flutter + Laravel Integration",
      imgUrl: ePortal,
    },
    {
      title: "Job Portal",
      description: "React + Laravel + MySQL",
      imgUrl: jobPortal,
    },
    {
      title: "Personal Portfolio",
      description: "React.js + EmailJS + Bootstrap",
      imgUrl: flutterApp,
    },
  ];

  // ===== BACKEND PROJECTS =====
  const projects2 = [
    {
      title: "Laravel REST API",
      description: "Authentication, Sanctum Tokens, CRUD Operations",
      imgUrl: laravelBackend,
    },
    {
      title: "GoLang API",
      description: "Backend API using Go, Bufio, and net/http",
      imgUrl: goApi,
    },
  ];

  // ===== FULL STACK PROJECTS =====
  const projects3 = [
    {
      title: "Oro Tracker",
      description: "Next.js + Go + WebSocket (Live Gold/Silver Rates)",
      imgUrl: fullStackTracker,
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
                    I have built multiple full-stack applications using Flutter, Laravel,
                    React.js, and Go. My work focuses on real-world solutions — from APIs
                    to responsive UIs and mobile apps. Below are some highlighted projects
                    showcasing my versatility and modern development skills.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <span className="d-none d-sm-inline">Frontend Development</span>
                          <span className="d-inline d-sm-none">Frontend</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <span className="d-none d-sm-inline">Backend Development</span>
                          <span className="d-inline d-sm-none">Backend</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          <span className="d-none d-sm-inline">FullStack Development</span>
                          <span className="d-inline d-sm-none">FullStack</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
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
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
