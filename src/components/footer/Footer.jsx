import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <Container fluid className="mt-5 pb-3" id="footer">
      <Row className={styles.footerRow}>
        <Col md={4}>
          <h5>Contact for Counseling and Prayer</h5>
          <p>
            Pastor: D. Ravi Kumar
            <br />
            Phone: +91-9845754515
            <br />
            WhatsApp: +91-9845754515
            <br />
            Email: pgf.prayerrequests@gmail.com
          </p>
        </Col>
        <Col md={4}>
          <h5>Address</h5>
          <p>
            Peniel Gospel Fellowship Telugu Church
            <br />
            Anugraha Hall, St. Joseph Convent School Campus
            <br />
            Opp: YEZDI SHOW ROOM, Near Whitefield Police Station
            <br />
            Close to HOPE FARM METRO STATION
            <br />
            Whitefield, Bangalore-560066
          </p>
        </Col>
        <Col md={4}>
          <h5>Service Timings</h5>
          <p>
            Sunday Service: 10:00 a.m to 12:30 p.m
            <br />
            Midweek (Zoom) Prayer:
            <br />
            - Every Wednesday: 8:00 a.m to 9:00 a.m (Zoom ID : 3353743463,
            Password : 777)
            <br />- Every Saturday: 8:00 a.m to 9:00 a.m (Zoom ID : 3353743463,
            Password : 777)
          </p>
        </Col>
      </Row>
      <Row className={styles.footerRow}>
        <Col md={4}>
          <h5>Map Location</h5>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9301576952903!2d77.74633827507654!3d12.97631888733947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f30e3c39fff%3A0xe54558584c087ca8!2sPGF-Whitefield!5e0!3m2!1sen!2sin!4v1709172618220!5m2!1sen!2sin"
            width="600"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
