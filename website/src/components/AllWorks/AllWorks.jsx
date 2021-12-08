import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class AllWorks extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="allServicesH1">Recent Works</h1>
          <div className="allServicesLine"></div>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/female-student-listening-webinar-online_74855-6461.jpg"
                />
                <Card.Body>
                  <Card.Title className="serviceH2">Project 1</Card.Title>
                  <Card.Text className="serviceP">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    {" "}
                    <Link className="linkStyle" to="/projectdetails">
                      Visit
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/happy-women-learning-language-online-isolated-flat-vector-illustration-cartoon-female-characters-taking-individual-lessons-through-messenger-education-digital-technology-concept_74855-10088.jpg"
                />
                <Card.Body>
                  <Card.Title className="serviceH2">Project 2</Card.Title>
                  <Card.Text className="serviceP">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    {" "}
                    <Link className="linkStyle" to="/projectdetails">
                      Visit
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card className="projectCard">
                <Card.Img
                  variant="top"
                  src="https://image.freepik.com/free-vector/book-readers-concept_74855-6263.jpg"
                />
                <Card.Body>
                  <Card.Title className="serviceH2">Project 3</Card.Title>
                  <Card.Text className="serviceP">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    {" "}
                    <Link className="linkStyle" to="/projectdetails">
                      Visit
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AllWorks;
