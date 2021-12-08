import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

class TopPage extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topPageContainer p-0">
          {/*fluid=true it will take the total width. p-0 padding*/}
          <div className="topPageOverlay">
            <Container className="topPageContent">
              <Row>
                <Col className="text-center">
                  <h4 className="topPageTitle">{this.props.pagetitle}</h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopPage;
