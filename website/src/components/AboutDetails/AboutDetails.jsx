import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import APIFailure from "../APIFailure/APIFailure";

class AboutDetails extends Component {
  constructor() {
    super();
    this.state = {
      aboutDetails: "",
      loadingAniamation: true,
      error: false,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.Information)
      .then((result) => {
        if (result == null) {
          this.setState({ error: true, loadingAniamation: false });
        } else {
          this.setState({
            aboutDetails: result[0]["about"],
            loadingAniamation: false,
          });
        }
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }
  render() {
    if (this.state.loadingAniamation == true) {
      return <Loading />;
    } else if (this.state.loadingAniamation == false) {
      return (
        <Fragment>
          <Container className="mt-5">
            <Row>
              <Col lg={12} md={12} sm={12}>
                {ReactHtmlParser(this.state.aboutDetails)}
                {/* <h1 className="serviceH2">Who we are?</h1>
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
              </p> */}
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    } //end else
    else if (this.state.error == true) {
      return <APIFailure />;
    }
  }
}

export default AboutDetails;
