import React, { Component, Fragment } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faClone } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

class CourseDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      MyCourseDetailsID: props.id,
      courseTitle: "",
      courseDescription: "",
      courseImage: "",
      courseViewTitle: "",
      courseViewDescriptione: "",
      totalDuration: "",
      totalLecture: "",
      totalStudents: "",
      allSkill: "",
      videoUrl: "",
    };
  }

  componentDidMount() {
    RestURL.GETRequest(
      AppUrl.SingleCourseDetails + this.state.MyCourseDetailsID
    ).then((result) => {
      this.setState({
        courseTitle: result[0]["course_title"],
        courseDescription: result[0]["course_description"],
        courseImage: result[0]["course_image"],
        courseViewTitle: result[0]["course_view_title"],
        courseViewDescription: result[0]["course_view_description"],
        totalDuration: result[0]["total_duration"],
        totalLecture: result[0]["total_lecture"],
        totalStudents: result[0]["total_students"],
        allSkill: result[0]["all_skill"],
        videoUrl: result[0]["video_url"],
      });
    });
  }

  render() {
    // let courseTitle = "";
    // let courseDescription = "";
    // let courseImage = "";
    // let courseViewTitle = "";
    // let courseViewDescriptione = "";
    // let totalDuration = "";
    // let totalLecture = "";
    // let totalStudents = "";
    // let allSkill = "";
    // let videoUrl = "";

    // let MyCourseDetailsArray = this.props.courseDetailsData;
    // if (MyCourseDetailsArray.length == 1) {
    //   courseTitle = MyCourseDetails[0]["course_title"];
    //   courseDescription = MyCourseDetails[0]["course_description"];
    //   courseImage = MyCourseDetails[0]["course_image"];
    //   courseViewTitle = MyCourseDetails[0]["course_view_title"];
    //   courseViewDescriptione = MyCourseDetails[0]["course_view_description"];
    //   totalDuration = MyCourseDetails[0]["total_duration"];
    //   totalLecture = MyCourseDetails[0]["total_lecture"];
    //   totalStudents = MyCourseDetails[0]["total_students"];
    //   allSkill = MyCourseDetails[0]["all_skill"];
    //   videoUrl = MyCourseDetails[0]["video_url"];
    // }

    return (
      <Fragment>
        <Container className="mt-5">
          <Zoom top cascade>
            <Row>
              <Col lg={8} md={6} sm={12}>
                <h1 className="coursedetails">{this.state.courseTitle} </h1>

                <img
                  className="coursedetailsimage"
                  src={this.state.courseImage}
                />
                <br />
                <p className="serviceP">{this.state.courseViewDescription}</p>
              </Col>

              <Col lg={4} md={6} sm={12}>
                <div class="widget_feature">
                  <h4 class="widget-title text-center">Course Features</h4>
                  <hr />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faUser} /> <span>Enrolled :</span>
                      {"  "}
                      {this.state.totalStudents}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClock} /> <span>Duration :</span>{" "}
                      2{this.state.totalDuration}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClipboard} />
                      {"  "}
                      <span>Lectures :</span> {this.state.totalLecture}
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClone} />{" "}
                      <span>Categories:</span>
                      {"  "}
                      Technology
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faTags} /> <span>Tags:</span>
                      {"  "}
                      Android, JavaScript
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faClipboard} />
                      {"  "}
                      <span>Instructor:</span> Ethan Dean
                    </li>
                  </ul>
                  <div class="price-wrap text-center">
                    <h5>
                      Price:<span>$54.00</span>
                    </h5>
                    <Button variant="warning">ENROLL COURSE </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Zoom>
        </Container>

        <Container className=" mt-5">
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div class="widget_feature">
                <h1 className="coursedetails text-center">
                  Things that you need
                </h1>
                <hr />
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className="iconCheck"
                      icon={faCheckCircle}
                    />{" "}
                    Metus interdum metus
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className="iconCheck"
                      icon={faCheckCircle}
                    />{" "}
                    Metus interdum metus
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className="iconCheck"
                      icon={faCheckCircle}
                    />{" "}
                    Metus interdum metus
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon
                      className="iconCheck"
                      icon={faCheckCircle}
                    />{" "}
                    Metus interdum metus
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={6} md={6} sm={12}>
              <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
                <BigPlayButton position="center" />
              </Player>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default CourseDetails;
