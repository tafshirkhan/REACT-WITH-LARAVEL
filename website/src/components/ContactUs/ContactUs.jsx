import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceH2">Contact</h1>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1 className="serviceH2">Discussion</h1>
              <p className="serviceP">
                6555 XYZ National Center Kalipor <br />
                <FontAwesomeIcon icon={faEnvelope} />
                Email: xyz@gmail.com <br />
                <FontAwesomeIcon icon={faPhone} s /> Phone: +654 322 345
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ContactUs;
