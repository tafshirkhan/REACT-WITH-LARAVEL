import React, { Component, Fragment } from "react";
import { Col, Container, Modal, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton } from "video-react";
class Video extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  modalClose = () => this.setState({ show: false });
  modalOpen = () => this.setState({ show: true });
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="allServicesH1">All Videos</h1>
          <div className="allServicesLine"></div>
          <Row>
            <Col lg={6} md={6} sm={12} className="VideoText">
              <p className="serviceP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                porttitor, metus vel consequat blandit, quam mi dignissim nisl,
                vitae euismod velit est nec ligula.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                porttitor, metus vel consequat blandit, quam mi dignissim nisl,
                vitae euismod velit est nec ligula.
              </p>
            </Col>

            <Col lg={6} md={6} sm={12} className="VideoCard">
              <FontAwesomeIcon
                onClick={this.modalOpen}
                className="iconSection"
                icon={faVideoSlash}
              />
            </Col>
          </Row>
        </Container>

        <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
              <BigPlayButton position="center" />
            </Player>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.modalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;