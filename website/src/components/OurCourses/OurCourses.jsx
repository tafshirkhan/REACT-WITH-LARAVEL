import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class OurCourses extends Component {
  render() {
    return (
      <Fragment Fragment>
        <Container className="text-center">
          <h1 className="allServicesH1">Our Courses</h1>
          <div className="allServicesLine"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-3">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceH2">Learn HTML </h5>
                  <p className="text-justify serviceP">
                    Learn basic essential of html and css
                  </p>
                  <Link
                    className="courseViewDetails float-left"
                    to="/coursedetails"
                  >
                    View Details
                  </Link>
                </Col>

                <Col lg={6} md={6} sm={12} className="p-3">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-vector/e-learning-innovative-online-education-internet-technology-concept-wireframe-hand-touching-digital-interface_127544-1189.jpg"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceH2">Learn HTML </h5>
                  <p className="text-justify serviceP">
                    Learn basic essential of html and css
                  </p>
                  <Link
                    className="courseViewDetails float-left"
                    to="/coursedetails"
                  >
                    View Details
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <Row>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceH2">Learn HTML </h5>
                    <p className="text-justify serviceP">
                      Learn basic essential of html and css
                    </p>
                    <Link
                      className="courseViewDetails float-left"
                      to="/coursedetails"
                    >
                      View Details
                    </Link>
                  </Col>

                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceH2">Learn HTML </h5>
                    <p className="text-justify serviceP">
                      Learn basic essential of html and css
                    </p>
                    <Link
                      className="courseViewDetails float-left"
                      to="/coursedetails"
                    >
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default OurCourses;
