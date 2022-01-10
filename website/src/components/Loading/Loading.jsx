import React, { Component } from "react";
import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoadingIcon from "../../asset/images/loading.svg";
class Loading extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <Row>
            <Col>
              <img className="LoadingAnimation" src={LoadingIcon} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Loading;
