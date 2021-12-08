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
class CourseDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className="mt-5">
          <Row>
            <Col lg={8} md={6} sm={12}>
              <h1 className="coursedetails">
                Praesent eu dolor eu orci vehicula euismod
              </h1>
              <img
                className="coursedetailsimage"
                src="https://solverwp.com/demo/html/edumint/assets/img/course/1.png"
              />
              <br />
              <p className="serviceP">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur ullam tempora cumque repudiandae ex similique aliquid,
                magni quod magnam veniam. Qui hic dolore sint molestiae,
                voluptatem aperiam atque recusandae suscipit! <br /> Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Dolores earum,
                doloremque dignissimos reprehenderit, esse saepe odio delectus
                voluptatem tempore neque modi ut labore quasi dolorum, voluptate
                reiciendis quibusdam blanditiis quaerat!
              </p>
            </Col>

            <Col lg={4} md={6} sm={12}>
              <div class="widget_feature">
                <h4 class="widget-title text-center">Course Features</h4>
                <hr />
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faUser} /> <span>Enrolled :</span>
                    {"  "}
                    1200 students
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} /> <span>Duration :</span> 2
                    hours
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClipboard} />
                    {"  "}
                    <span>Lectures :</span> 8
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClone} /> <span>Categories:</span>
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
