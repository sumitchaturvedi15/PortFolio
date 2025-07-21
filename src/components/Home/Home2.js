import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaCode } from "react-icons/fa";
//, FaTwitter
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a Competitive Programmer with a passion for Web Development, blending problem-solving skills with clean, efficient, and user-friendly design. 
            I love turning complex challenges into elegant solutions — both in code and on the web...
              <br />
              <br />I am proficient in languages:
              
                <b className="purple"> C++, JavaScript </b>
              
              with a strong grasp of Data Structures and Algorithms.
              <br />
              <br />
              I’m passionate about solving complex problems through{" "}
              
                <b className="purple">Competitive Programming, </b>
              
              consistently sharpening my skills on &nbsp;
              
                <b className="purple">LeetCode, Codeforces & CodeChef.</b>
              
              <br />
              <br />I specialize in building full-stack web applications using:
              
                <b className="purple">  React, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, Redux </b>
              
              as a frontend creating responsive, user-friendly interfaces.
              <br />
              
                <b className="purple"> Node.js, Express </b>
              
              as a backend to handle server-side logic and database management.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sumitchaturvedi15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sumitchaturvedi15/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sumitchaturvedii15/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/sumitchaturvedi15/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaCode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
