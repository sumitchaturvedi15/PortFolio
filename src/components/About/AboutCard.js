import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}><span className="purple">Sumit Chaturvedi </span>
            from <span className="purple"> Shahdol, India.</span>
            <br />
            <br />
            I’m currently pursuing a Bachelor of Technology in 
            Electronics & Instrumentation at the Institute of Engineering & Technology, Indore (Graduating 2026).
            <br />
            <br />
            I’m a Competitive Programmer and Full Stack Web Developer, actively participating in contests on LeetCode, CodeChef, 
            and Codeforces to continuously sharpen my problem-solving skills.
            <br />
            <br />
            My tech stack includes C++, JavaScript, React, Node.js, and Next.js, 
            enabling me to build efficient, scalable, and user-friendly web applications.
            <br />
            <br />
            Beyond coding, I enjoy diving into manga and anime, and I’m passionate about competitive games like chess, 
            where strategy fuels my mindset both on and off the board.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
