import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../asset/images/face.png";
import { init } from "ityped";

class Aboume extends Component {
  componentDidMount() {
    const myElement = document.querySelector("#myElement");
    init(myElement, {
      showCursor: false,
      strings: ["Crazy Web Developer!", "Developer Instructor!"],
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="allServicesH1">About Us</h1>
          <div className="reviewTitleBottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutUsImageSection">
                <img className="aboutUsImage" src={face} />
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="aboutUsBody">
                <h2 className="aboutUsTitle">Hi, There</h2>
                <h2 className="aboutUsDetails">Crazy Developers</h2>
                <h3 className="aboutUsTitle">
                  Wants to become a <span id="myElement"></span>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Aboume;
