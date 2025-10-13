import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a target="_blank" href="https://www.linkedin.com/in/ali-hassan-113b8b314/"><img src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://github.com/Ali-Hassan-codes" ><img src={navIcon2} alt="" /></a>
            </div>
          
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
