import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import welcome1 from "../../asset/images/welcome1.png";
import welcome2 from "../../asset/images/welcome2.png";
import welcome3 from "../../asset/images/welcome3.png";
import engineer from "../../asset/images/engineer.png";
import phd from "../../asset/images/phd.png";
import account from "../../asset/images/accounting.png";

class WelcomeHome extends Component {
  render() {
    return (
      <Fragment>
        {/*First Div */}
        <div className="WelcomeHomeTop">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12}>
                {/*2nd Div */}
                <div className="WelcomeHome2nd-section text-center">
                  {/*3rd Div */}
                  <div className="WelcomeHome3rd">
                    <h6 className="WelcomeHome3rd-H6 double-line">WELCOME</h6>
                    <h2 className="WelcomeHomeMain">
                      A Huge Learning Comunity
                    </h2>

                    <Container className="text-center mt-5">
                      <Row>
                        <Col lg={4} md={6} sm={12}>
                          <img className="welcomeIcon" src={welcome1} />
                          <h1 className="serviceH2">Fast Coding</h1>
                          <p>Become a expert in coding</p>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <img className="welcomeIcon" src={welcome2} />
                          <h1 className="serviceH2">Fast Implementing</h1>
                          <p>Learning and implementing</p>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                          <img className="welcomeIcon" src={welcome3} />
                          <h1 className="serviceH2">Fast Learning</h1>

                          <p>Learn everything in easy way</p>
                        </Col>
                      </Row>
                      {/*</Container> */}
                      <Row className="intro-footer bg-base text-center mt-5">
                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12}>
                              <img
                                className="engineerIcon imgPosition "
                                src={engineer}
                              />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <h5 className="text-justify engineerH2">
                                Engineer
                              </h5>
                              <p className="text-justify serviceP">
                                Lorem ipsum dolor sit amet
                              </p>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12}>
                              <img
                                className="engineerIcon imgPosition"
                                src={phd}
                              />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <h5 className="text-justify engineerH2">
                                Scholarship
                              </h5>
                              <p className="text-justify serviceP">
                                Lorem ipsum dolor sit amet
                              </p>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                          <Row>
                            <Col lg={6} md={6} sm={12}>
                              <img
                                className="engineerIcon imgPosition"
                                src={account}
                              />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                              <h5 className="text-justify engineerH2">
                                Accountent
                              </h5>
                              <p className="text-justify serviceP">
                                Lorem ipsum dolor sit amet
                              </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}

export default WelcomeHome;
