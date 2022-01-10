import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYahoo } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Loading from "../Loading/Loading";
import APIFailure from "../APIFailure/APIFailure";

class Footer extends Component {
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
      credit: "",
      loadingAniamation: "p-3 text-justify",
      mainDiv: "d-none",
      error: false,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.FooterData)
      .then((result) => {
        if (result == null) {
          this.setState({ error: true, loadingAniamation: false });
        } else {
          this.setState({
            address: result[0]["address"],
            email: result[0]["email"],
            phone: result[0]["phone"],
            facebok: result[0]["facebook"],
            youtube: result[0]["youtube"],
            instagram: result[0]["instagram"],
            twitter: result[0]["twitter"],
            credit: result[0]["credit"],
            loadingAniamation: "d-none",
            mainDiv: "p-3 text-center",
          });
        }
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  render() {
    if (this.state.error == false) {
      return (
        <Fragment>
          <Container fluid={true} className="footerSection">
            <Row>
              <Col lg={3} md={6} sm={12} className="p-3 text-center">
                <h2 className="footerName text-center">Follow Us</h2>
                <div className="socialIconSection">
                  <a className="facebook social" href={this.state.facebok}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                  <a className="youtube social" href={this.state.youtube}>
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                  </a>
                  <a className="instagram social" href={this.state.instagram}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                  <a className="twitter social" href={this.state.twitter}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </div>
              </Col>
              <Col className={this.state.loadingAniamation}>
                <Loading />
              </Col>
              <Col lg={3} md={6} sm={12} className={this.state.mainDiv}>
                <h2 className="footerName text-center">Address</h2>
                <p className="footerAddress">
                  {this.state.address} <br />
                  <FontAwesomeIcon icon={faEnvelope} />
                  Email: {this.state.email} <br />
                  <FontAwesomeIcon icon={faPhone} s /> Phone: {this.state.phone}
                </p>
              </Col>
              <Col lg={3} md={6} sm={12} className="p-3 text-center">
                <h2 className="footerName text-center">Information</h2>
                <Link className="footerLink" to="/about">
                  About Us
                </Link>{" "}
                <br />
                <a className="footerLink" href="#">
                  Profile
                </a>{" "}
                <br />
                <Link className="footerLink" to="/contact">
                  Contact Us
                </Link>{" "}
                <br />
              </Col>
              <Col lg={3} md={6} sm={12} className="p-3 text-center">
                <h2 className="footerName text-center">Our Policy</h2>
                <Link className="footerLink" to="/policy">
                  Policy
                </Link>
                <br />
                <Link className="footerLink" to="/termandcondition">
                  Terms & Condition
                </Link>{" "}
                <br />
                <Link className="footerLink" to="/privacy">
                  Privacy
                </Link>{" "}
                <br />
                {/* <Link className="footerLink" to="/ourgoal">
                Our Goal
              </Link>{" "} */}
                <br />
              </Col>
            </Row>
          </Container>

          <Container fluid={true} className="copyrightSection text-center">
            <a className="copyrightLink" href="#">
              @ Copyright 2021 by xyz, All Rigths Reserved
            </a>
          </Container>
        </Fragment>
      );
    } //end if
    else if (this.state.error == true) {
      return <APIFailure />;
    }
  }
}

export default Footer;
