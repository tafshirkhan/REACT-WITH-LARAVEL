import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class URL404 extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col>
              <h1 className="allServicesH1">Page not found</h1>
              <h1 className="notFound">404</h1>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default URL404;
