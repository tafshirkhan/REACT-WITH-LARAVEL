import React, { Component, Fragment } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Loading from "../Loading/Loading";

class ContactUs extends Component {
  constructor() {
    super();
    this.state = {
      address: "",
      email: "",
      phone: "",
      facebok: "",
      youtube: "",
      instagram: "",
      twitter: "",
      loadingAniamation: true,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.FooterData).then((result) => {
      this.setState({
        address: result[0]["address"],
        email: result[0]["email"],
        phone: result[0]["phone"],
        loadingAniamation: false,
      });
    });
  }

  postContact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    // alert(name + "/" + email + "/" + message);
    let jsonobject = { name: name, email: email, message: message };
    RestURL.POSTRequest(AppUrl.PostContact, JSON.stringify(jsonobject))
      .then((result) => {
        alert(result);
      })
      .catch((error) => {
        alert("Error");
      });
  }

  render() {
    if (this.state.loadingAniamation == true) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Container className="mt-5">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <h1 className="serviceH2">Contact</h1>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control id="message" as="textarea" rows={3} />
                  </Form.Group>

                  <Button onClick={this.postContact} variant="primary">
                    Submit
                  </Button>
                </Form>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <h1 className="serviceH2">Discussion</h1>
                <p className="serviceP">
                  {this.state.address} <br />
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email: {this.state.email} <br />
                  <FontAwesomeIcon icon={faPhone} s /> Phone: {this.state.phone}
                </p>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    } //end else
  }
}

export default ContactUs;
