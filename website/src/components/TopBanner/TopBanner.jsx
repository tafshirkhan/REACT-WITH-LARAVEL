import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

class TopBanner extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topBanner p-0">
          {" "}
          {/*fluid=true it will take the total width. p-0 padding*/}
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className="text-center">
                  <h1 className="reactProject">REACT PROJECT</h1>
                  <h4 className="frameworkLife">
                    FRAMEWORK MAKE LIFE MORE EAISER
                  </h4>
                  <Button variant="info">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
