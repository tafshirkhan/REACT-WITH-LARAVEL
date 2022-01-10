import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ErrorIcon from "../../asset/images/error.svg";

class APIFailure extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col>
              <img className="ErrorAnimation" src={ErrorIcon} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default APIFailure;
