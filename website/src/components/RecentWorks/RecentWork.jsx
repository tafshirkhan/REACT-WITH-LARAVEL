import React, { Component, Fragment } from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Loading from "../Loading/Loading";

class RecentWork extends Component {
  constructor() {
    super();
    this.state = {
      myRecentWork: [],
      loadingAniamation: true,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.RecentWorks).then((result) => {
      this.setState({ myRecentWork: result, loadingAniamation: false });
    });
  }

  render() {
    if (this.state.loadingAniamation == true) {
      return <Loading />;
    } else {
      const list = this.state.myRecentWork;
      const recentView = list.map((list) => {
        return (
          <Col lg={4} md={6} sm={12}>
            <Card className="projectCard">
              <Card.Img variant="top" src={list.first_image} />
              <Card.Body>
                <Card.Title className="serviceH2">
                  {list.project_name}
                </Card.Title>
                <Card.Text className="serviceP">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">
                  <Link
                    className="linkStyle"
                    to={"/projectdetails/" + list.id + "/" + list.project_name}
                  >
                    Visit
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      });
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="allServicesH1">Recent Works</h1>
            <div className="allServicesLine"></div>
            <Row>
              {recentView}
              {/* <Col lg={4} md={6} sm={12}>
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
                    <Link className="linkStyle" to="/projectdetails">
                      Visit
                    </Link>
                  </Button>
                </Card.Body>
              </Card>
            </Col> */}
            </Row>
          </Container>
        </Fragment>
      );
    } //end else
  }
}

export default RecentWork;
