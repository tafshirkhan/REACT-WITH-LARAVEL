import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../asset/images/design.png";
import ecommerceIcon from "../../asset/images/ecommerce.png";
import webIcon from "../../asset/images/web.png";

class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="allServicesH1">All Services</h1>
          <div className="allServicesLine"></div>
          <Row>
            {/*Total row take 12 column*/}
            <Col lg={4} md={6} sm={12}>
              {/*large=4 means 4+4+4,medium=6 means 6+6,small=12 means 12, make responsive */}
              <div className="serviceCard text-center">
                <img className="designIcon" src={designIcon} alt="" />
                <h2 className="serviceH2">Design</h2>
                <p className="serviceP">Design your website professionally</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="ecommerceIcon" src={ecommerceIcon} alt="" />
                <h2 className="serviceH2">Ecommerce</h2>
                <p className="serviceP">For developing ecommerce website</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="webIcon" src={webIcon} alt="" />
                <h2 className="serviceH2">Development</h2>
                <p className="serviceP">Make a well decorated website </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
