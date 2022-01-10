import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import project from "../../asset/images/project.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";

class ProjectDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      MyProjectDetailsID: props.id,
      second_image: "",
      project_name: "",
      project_description: "",
      project_feature: "",
      live_preview: "",
    };
  }

  componentDidMount() {
    RestURL.GETRequest(
      AppUrl.SingleWokrsDetails + this.state.MyProjectDetailsID
    ).then((result) => {
      this.setState({
        second_image: result[0]["second_image"],
        project_name: result[0]["project_name"],
        project_description: result[0]["project_description"],
        project_feature: result[0]["project_feature"],
        live_preview: result[0]["project_live_preview"],
      });
    });
  }
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="">
                <img src={this.state.second_image} />
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <div className="project">
                <h1 className="projecth1">{this.state.project_name}</h1>
                <p className="projectp text-justify">
                  {this.state.project_name}
                </p>
                <Row>
                  <Col lg={6} md={6} sm={12}>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      {this.state.project_feature}
                    </p>
                    <Button variant="info" href={this.state.live_preview}>
                      Live Preview
                    </Button>
                  </Col>

                  {/* <Col lg={6} md={6} sm={12}>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Ligula cur maecenas
                    </p>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Coding Practice
                    </p>
                    <p className="cardP text-justify">
                      <FontAwesomeIcon
                        className="iconCheck"
                        icon={faCheckSquare}
                      />{" "}
                      Ligula cur maecenas
                    </p>
                  </Col> */}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ProjectDetails;
