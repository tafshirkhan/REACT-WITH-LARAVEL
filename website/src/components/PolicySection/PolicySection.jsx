import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import APIFailure from "../APIFailure/APIFailure";

class PolicySection extends Component {
  constructor() {
    super();
    this.state = {
      policy: "",
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
            policy: result[0]["refund_policy"],
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
          <Container className="text-center mt-5">
            <Row>
              <Col lg={12} md={12} sm={12}>
                {ReactHtmlParser(this.state.policy)}

                {/* <h1 className="serviceH2">Protect your data</h1>
              <hr />
              <p className="serviceP">
                <ul>
                  <li>
                    To prosecute and defend a court, arbitration, or similar
                    legal proceeding.Prosecute and defend a court, arbitration,
                    or similar legal proceeding
                  </li>
                  <li>
                    To prosecute and defend a court, arbitration, or similar
                    legal proceeding.Prosecute and defend a court, arbitration,
                    or similar legal proceeding
                  </li>
                  <li>
                    To prosecute and defend a court, arbitration, or similar
                    legal proceeding.Prosecute and defend a court, arbitration,
                    or similar legal proceeding
                  </li>
                  <li>
                    To prosecute and defend a court, arbitration, or similar
                    legal proceeding.Prosecute and defend a court, arbitration,
                    or similar legal proceeding
                  </li>
                  <li>
                    To prosecute and defend a court, arbitration, or similar
                    legal proceeding.Prosecute and defend a court, arbitration,
                    or similar legal proceeding
                  </li>
                  <li>
                    To prosecute and defend a court, arbitration, or similar
                    legal proceeding.Prosecute and defend a court, arbitration,
                    or similar legal proceeding
                  </li>
                  <li>
                    To prosecute and defend a court, arbitration, or similar
                    legal proceeding.Prosecute and defend a court, arbitration,
                    or similar legal proceeding
                  </li>
                </ul>
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

export default PolicySection;
