import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class AboutDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="serviceH2">Who we are?</h1>
              <hr />
              <p className="serviceP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cumque autem saepe repudiandae vitae, nulla maxime
                error eos architecto vel incidunt accusamus soluta ad laudantium
                natus quis dolore cum! Obcaecati. <br /> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque cumque autem saepe
                repudiandae vitae, nulla maxime error eos architecto vel
                incidunt accusamus soluta ad laudantium natus quis dolore cum!
                Obcaecati.
              </p>
              <br /> <br />
              <h1 className="serviceH2">Our Mission & Vission</h1>
              <hr />
              <p className="serviceP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cumque autem saepe repudiandae vitae, nulla maxime
                error eos architecto vel incidunt accusamus soluta ad laudantium
                natus quis dolore cum! Obcaecati. <br /> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque cumque autem saepe
                repudiandae vitae, nulla maxime error eos architecto vel
                incidunt accusamus soluta ad laudantium natus quis dolore cum!
                Obcaecati.
              </p>
              <br /> <br />
              <h1 className="serviceH2">Our Goal</h1>
              <hr />
              <p className="serviceP">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque cumque autem saepe repudiandae vitae, nulla maxime
                error eos architecto vel incidunt accusamus soluta ad laudantium
                natus quis dolore cum! Obcaecati. <br /> Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Doloremque cumque autem saepe
                repudiandae vitae, nulla maxime error eos architecto vel
                incidunt accusamus soluta ad laudantium natus quis dolore cum!
                Obcaecati.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutDetails;
