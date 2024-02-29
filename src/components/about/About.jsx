import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import pastorImage from "../../images/RaviAnna.png"; // Import your church image

const About = () => {
  return (
    <Container className="my-5" id="aboutPage">
      <Row className="align-items-center">
        {/* Left side: Text */}
        <Col xs={12} md={8}>
          <div>
            <h2>Welcoming You to PGF Church</h2>
            <p>
              At PGF Church, we're thrilled to welcome you into our loving
              community. Led by Pastor <strong>Ravi Kumar</strong> and{" "}
              <strong>Hepsibha</strong>, we're dedicated to creating a space
              where you can encounter the presence of God and discover your true
              purpose.
            </p>
            <p>
              PGF Church is an independent faith ministry founded on 7-6-1978 by
              <strong> Dr. K. Nireekshana Paul</strong> .
            </p>
            <p>
              Just as the Bible promises, we believe that when you become part
              of the family of God, you'll experience a flourishing life.
              Whether you're joining us in person or connecting online, get
              ready to elevate your spiritual journey and step into a new level
              of destiny.
            </p>
          </div>
        </Col>
        {/* Right side: Image */}
        <Col xs={12} md={4}>
          <Image src={pastorImage} alt="Church" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
