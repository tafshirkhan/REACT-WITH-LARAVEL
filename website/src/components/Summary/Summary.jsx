import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import ReactVisibilitySensor from "react-visibility-sensor";
class Summary extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="summaryBanner p-0">
          {" "}
          {/*fluid=true it will take the total width. p-0 padding*/}
          <div className="summaryBannerOverlay">
            <Container className="text-center">
              <Row>
                <Col lg={8} md={6} sm={12}>
                  <Row className="countRow">
                    <Col>
                      <FontAwesomeIcon className="iconSection" icon={faGlobe} />
                      <h1 className="countNumber">
                        <CountUp start={0} end={30000}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Total Students</h4>
                      <hr className="bg-white w-35" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon
                        className="iconSection"
                        icon={faLaptop}
                      />
                      <h1 className="countNumber">
                        <CountUp start={0} end={2000}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Overall Courses</h4>
                      <hr className="bg-white w-35" />
                    </Col>
                    <Col>
                      <FontAwesomeIcon className="iconSection" icon={faStar} />
                      <h1 className="countNumber">
                        <CountUp start={0} end={4000}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </h1>
                      <h4 className="countTitle">Total Reviews</h4>
                      <hr className="bg-white w-35" />
                    </Col>
                  </Row>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <Card className="cardWorkMain">
                    <Card.Body>
                      <Card.Title className="cardTitle">Achievement</Card.Title>
                      <Card.Text>
                        <p className="cardP text-justify">
                          <FontAwesomeIcon
                            className="iconCheck"
                            icon={faCheckSquare}
                          />{" "}
                          Knowledge
                        </p>
                        <p className="cardP text-justify">
                          <FontAwesomeIcon
                            className="iconCheck"
                            icon={faCheckSquare}
                          />{" "}
                          Code Analysis
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
                          Testing and Implementation
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Summary;
