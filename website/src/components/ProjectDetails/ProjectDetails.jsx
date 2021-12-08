import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import project from "../../asset/images/project.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="about-thumb-wrap after-shape">
                <img src={project} />
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="project">
                <h1 className="projecth1">
                  Education in continuing a proud tradition.
                </h1>
                <p className="projectp text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae facere impedit architecto a excepturi quo dolorem,
                  corrupti obcaecati maiores ipsam esse ut omnis recusandae,
                  suscipit et earum consectetur labore porro.
                </p>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Coding Practice
                    </p>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Ligula cur maecenas
                    </p>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Coding Practice
                    </p>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Ligula cur maecenas
                    </p>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Coding Practice
                    </p>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Ligula cur maecenas
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProjectDetails;
