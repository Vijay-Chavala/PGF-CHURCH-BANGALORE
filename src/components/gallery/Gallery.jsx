import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./gallery.module.css";
import PGF4 from "../../images/PGF4.jpg";
import PGF5 from "../../images/PGF5.jpg";
import PGF6 from "../../images/PGF6.jpg";
import PGF7 from "../../images/PGF7.jpg";
import PGF8 from "../../images/PGF8.jpg";

const Gallery = () => {
  return (
    <Container>
      <Row className="text-center mb-3">
        <Col xs={12}>
          <h2>Gallery</h2>
        </Col>
      </Row>
      <Row className={styles.imageRow}>
        <Col xs={12} sm={4} className="text-center">
          <div className={styles.imageContainer}>
            <img src={PGF4} alt={"PGF4"} className="img-fluid" />
          </div>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <div className={styles.imageContainer}>
            <img src={PGF5} alt={"PGF5"} className="img-fluid" />
          </div>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <div className={styles.imageContainer}>
            <img src={PGF6} alt={"PGF6"} className="img-fluid" />
          </div>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <div className={styles.imageContainer}>
            <img src={PGF7} alt={"PGF7"} className="img-fluid" />
          </div>
        </Col>
        <Col xs={12} sm={4} className="text-center">
          <div className={styles.imageContainer}>
            <img src={PGF8} alt={"PGF8"} className="img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
