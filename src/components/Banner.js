import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pics.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["MERN Stack Developer", "Flutter Developer", "Laravel Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Ali Hassan`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["MERN Stack Developer", "Flutter Developer", "Laravel Developer"]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    I am a Full Stack Developer with 6 months of hands-on experience.
                    I build user-friendly, responsive websites and mobile applications using 
                    HTML, CSS, and JavaScript — along with modern frameworks like React and Next.js. 
                    I also work with backend technologies such as Node.js, Express, MongoDB, Laravel, 
                    and Go. I enjoy turning ideas into seamless, real-world applications while 
                    keeping up with the latest development trends. Feel free to reach out — 
                    I’d love to connect!
                  </p>
                  <a
                    href="https://www.linkedin.com/in/ali-hassan-113b8b314/"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      Let’s Work Together <ArrowRightCircle size={25} />
                    </button>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "hero-img animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    className="img-fluid"
                    src={headerImg}
                    alt="Ali Hassan"
                    style={{
                      borderRadius: "50%",
                      border: "10px solid #662c64",
                      filter: "brightness(50%) contrast(100%)",
                      width: window.innerWidth > 768 ? "430px" : "250px",
                    }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
