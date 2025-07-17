import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import bardsley from "../../Assets/Projects/Bardsley-home-page.png";
import currencyConverter from "../../Assets/Projects/currencyConverter.png"
import guessGame from "../../Assets/Projects/GuessGame.png"
import bitsOfCode from "../../Assets/Projects/blog.png";
import devLoop from "../../Assets/Projects/devloop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devLoop}
              isBlog={false}
              title="devLoop"
              description="devLoop is a web application that enables developers to match and collaborate based on shared interests and skills."
              ghLink="https://github.com/sumitchaturvedi15/devLoop"
              demoLink="https://github.com/sumitchaturvedi15/devLoop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bardsley}
              isBlog={false}
              title="School Website"
              description="A school website having Home Page, About Us, Academics, Gallery, Announcements, and Contact Page, built with HTML5, CSS3, Bootstrap, and JavaScript for a dynamic experience."
              ghLink="https://github.com/sumitchaturvedi15/bardsley"
              demoLink="https://sumitchaturvedi15.github.io/bardsley/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guessGame}
              isBlog={false}
              title="Guess Game"
              description="Guess Game: Game where you need to guess number between 1 to 100 correctly"
              ghLink="https://github.com/sumitchaturvedi15/Guess-Game"
              demoLink="https://sumitchaturvedi15.github.io/Guess-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currencyConverter}
              isBlog={false}
              title="Currency Converter"
              description="Currency converter that gives the exact latest currency change."
              ghLink="https://github.com/sumitchaturvedi15/Currency-converter"
              demoLink="https://currency-converter-devsnire.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
