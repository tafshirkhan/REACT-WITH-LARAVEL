import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Loading from "../Loading/Loading";
import APIFailure from "../APIFailure/APIFailure";
import Zoom from "react-reveal/Zoom";
import Bounce from "react-reveal/Bounce";

class AllCourses extends Component {
  constructor() {
    super();
    this.state = {
      allCourse: [],
      loadingAniamation: true,
      error: false,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.OurAllCourses)
      .then((result) => {
        if (result == null) {
          this.setState({ error: true });
        } else {
          this.setState({ allCourse: result, loadingAniamation: false });
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
      const list = this.state.allCourse;
      const allCourseView = list.map((list) => {
        return (
          <Col lg={6} md={12} sm={12}>
            <Bounce top cascade>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-3">
                  <img className="courseImage" src={list.course_image} />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceH2">
                    {list.course_title}{" "}
                  </h5>
                  <p className="text-justify serviceP">
                    {list.course_description}
                  </p>
                  <Link
                    className="courseViewDetails float-left"
                    to={"/coursedetails/" + list.id + "/" + list.course_title}
                  >
                    View Details
                  </Link>
                </Col>
              </Row>
            </Bounce>
          </Col>
        );
      });

      return (
        <Fragment>
          <Container className="text-center">
            <Zoom top cascade>
              <h1 className="allServicesH1">Our All Courses</h1>
            </Zoom>
            <div className="allServicesLine"></div>
            <Row>
              {allCourseView}
              {/* <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-3">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceH2">Learn HTML </h5>
                  <p className="text-justify serviceP">
                    Learn basic essential of html and css
                  </p>
                  <Link
                    className="courseViewDetails float-left"
                    to="/coursedetails"
                  >
                    View Details
                  </Link>
                </Col>

                <Col lg={6} md={6} sm={12} className="p-3">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-vector/e-learning-innovative-online-education-internet-technology-concept-wireframe-hand-touching-digital-interface_127544-1189.jpg"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceH2">Learn PHP </h5>
                  <p className="text-justify serviceP">
                    Learn basic essential of html and css
                  </p>
                  <Link
                    className="courseViewDetails float-left"
                    to="/coursedetails"
                  >
                    View Details
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-3">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceH2">Learn JAVASCRIPT </h5>
                  <p className="text-justify serviceP">
                    Learn basic essential of html and css
                  </p>
                  <Link
                    className="courseViewDetails float-left"
                    to="/coursedetails"
                  >
                    View Details
                  </Link>
                </Col>

                <Col lg={6} md={6} sm={12} className="p-3">
                  <img
                    className="courseImage"
                    src="https://image.freepik.com/free-vector/e-learning-innovative-online-education-internet-technology-concept-wireframe-hand-touching-digital-interface_127544-1189.jpg"
                  />
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceH2">Learn C# </h5>
                  <p className="text-justify serviceP">
                    Learn basic essential of html and css
                  </p>
                  <Link
                    className="courseViewDetails float-left"
                    to="/coursedetails"
                  >
                    View Details
                  </Link>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <Row>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceH2">Learn LARAVEL </h5>
                    <p className="text-justify serviceP">
                      Learn basic essential of html and css
                    </p>
                    <Link
                      className="courseViewDetails float-left"
                      to="/coursedetails"
                    >
                      View Details
                    </Link>
                  </Col>

                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceH2">Learn REACT </h5>
                    <p className="text-justify serviceP">
                      Learn basic essential of html and css
                    </p>
                    <Link
                      className="courseViewDetails float-left"
                      to="/coursedetails"
                    >
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Row>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceH2">Learn CSS </h5>
                    <p className="text-justify serviceP">
                      Learn basic essential of html and css
                    </p>
                    <Link
                      className="courseViewDetails float-left"
                      to="/coursedetails"
                    >
                      View Details
                    </Link>
                  </Col>

                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <h5 className="text-justify serviceH2">Learn .NET </h5>
                    <p className="text-justify serviceP">
                      Learn basic essential of html and css
                    </p>
                    <Link
                      className="courseViewDetails float-left"
                      to="/coursedetails"
                    >
                      View Details
                    </Link>
                  </Col>
                </Row>
              </Row>
            </Col> */}
            </Row>
          </Container>
        </Fragment>
      );
    } //end Else
    else if (this.state.error == true) {
      return <APIFailure />;
    }
  }
}

export default AllCourses;
