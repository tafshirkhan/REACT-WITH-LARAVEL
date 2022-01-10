import React, { Component, Fragment } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import axios from "axios";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Loading from "../Loading/Loading";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";

class TopBanner extends Component {
  constructor() {
    super();
    this.state = {
      homeTitle: "",
      homeSubTitle: "",
      loadingAniamation: "text-center",
      mainDiv: "d-none",
    };
  }
  componentDidMount() {
    // axios
    //   .get("http://127.0.0.1:8000/api/homepage/title")
    //   .then(function (response) {
    //     // handle success
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   });

    //uing common GET request
    RestURL.GETRequest(AppUrl.HomePageTitle)
      .then((result) => {
        this.setState({
          homeTitle: result[0]["home_title"],
          homeSubTitle: result[0]["home_subtitle"],
          loadingAniamation: "d-none",
          mainDiv: "text-center",
        });
      })
      .catch((error) => {
        this.setState({
          homeTitle: "?????",
          homeSubTitle: "?????",
        });
      });
  }

  render() {
    return (
      <Fragment>
        <Container fluid={true} className="topBanner p-0">
          {" "}
          {/*fluid=true it will take the total width. p-0 padding*/}
          <div className="topBannerOverlay">
            <Container className="topContent">
              <Row>
                <Col className={this.state.loadingAniamation}>
                  <Loading />
                </Col>
                <Col className={this.state.mainDiv}>
                  <Flip top cascade>
                    <h1 className="reactProject">{this.state.homeTitle}</h1>
                    <h4 className="frameworkLife">{this.state.homeSubTitle}</h4>
                  </Flip>
                  <Button variant="info">Learn More</Button>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default TopBanner;
