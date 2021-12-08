import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

class PrivacySection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5">
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h1 className="serviceH2">Privacy</h1>
              <hr />
              <p className="serviceP">
                <b>Contract formation:</b> Business Standard will try to process
                your subscription promptly but does not guarantee that your
                subscription will be activated by any specified time. By
                submitting your payment and other subscription details, you are
                making an offer to us to buy a subscription. Your offer will
                only be accepted by us and a contract formed when we have
                successfully verified your payment details and email address, at
                which point we will provide you with access to your
                subscription. Business Standard reserves the right to reject any
                offer in its discretion, for any or no reason. <br /> <br />
                <b>Payment details:</b> When you purchase a subscription, you
                must provide us with complete and accurate payment information.
                By submitting payment details you promise that you are entitled
                to purchase a subscription using those payment details. If we do
                not receive payment authorization
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default PrivacySection;
