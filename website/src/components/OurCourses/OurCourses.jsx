import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Loading from "../Loading/Loading";

class OurCourses extends Component {
  constructor() {
    super();
    this.state = {
      ourCourses: [],
      loadingAniamation: true,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.OurCourses).then((result) => {
      this.setState({ ourCourses: result, loadingAniamation: false });
    });
  }

  render() {
    if (this.state.loadingAniamation == true) {
      return <Loading />;
    } else {
      const list = this.state.ourCourses;
      const courseView = list.map((list) => {
        return (
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12} className="p-3">
                <img className="courseImage" src={list.course_image} />
              </Col>

              <Col lg={6} md={6} sm={12}>
                <h5 className="text-justify serviceH2">{list.course_title} </h5>
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
          </Col>
        );
      });
      return (
        <Fragment Fragment>
          <Container className="text-center">
            <h1 className="allServicesH1">Our Courses</h1>
            <div className="allServicesLine"></div>
            <Row>
              {courseView}
              {/* <Col lg={6} md={12} sm={12}>
              <Row>
                <Row>
                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
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

                  <Col lg={6} md={6} sm={12} className="p-3">
                    <img
                      className="courseImage"
                      src="https://image.freepik.com/free-vector/teaching-students-online-internet-learning-computer-programming-online-it-courses-best-online-it-training-online-certification-courses-concept_335657-194.jpg"
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
              </Row>
            </Col> */}
            </Row>
          </Container>
        </Fragment>
      );
    } //end else
  }
}

export default OurCourses;
