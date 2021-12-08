import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYahoo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg={3} md={6} sm={12} className="p-3 text-center">
              <h2 className="footerName text-center">Follow Us</h2>
              <div className="socialIconSection">
                <a className="facebook social" href="#">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a className="youtube social" href="#">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a className="instagram social" href="#">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a className="twitter social" href="#">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-3 text-center">
              <h2 className="footerName text-center">Address</h2>
              <p className="footerAddress">
                6555 XYZ National Center Kalipor <br />
                <FontAwesomeIcon icon={faEnvelope} />
                Email: xyz@gmail.com <br />
                <FontAwesomeIcon icon={faPhone} s /> Phone: +654 322 345
              </p>
            </Col>
            <Col lg={3} md={6} sm={12} className="p-3 text-center">
              <h2 className="footerName text-center">Information</h2>
              <Link className="footerLink" to="/about">
                About Us
              </Link>{" "}
              <br />
              <a className="footerLink" href="#">
                Profile
              </a>{" "}
              <br />
              <Link className="footerLink" to="/contact">
                Contact Us
              </Link>{" "}
              <br />
            </Col>
            <Col lg={3} md={6} sm={12} className="p-3 text-center">
              <h2 className="footerName text-center">Our Policy</h2>
              <Link className="footerLink" to="/policy">
                Policy
              </Link>
              <br />
              <Link className="footerLink" to="/termandcondition">
                Terms & Condition
              </Link>{" "}
              <br />
              <Link className="footerLink" to="/privacy">
                Privacy
              </Link>{" "}
              <br />
              <Link className="footerLink" to="/ourgoal">
                Our Goal
              </Link>{" "}
              <br />
            </Col>
          </Row>
        </Container>

        <Container fluid={true} className="copyrightSection text-center">
          <a className="copyrightLink" href="#">
            @ Copyright 2021 by xyz, All Rigths Reserved
          </a>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
