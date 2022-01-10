import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../asset/images/design.png";
import ecommerceIcon from "../../asset/images/ecommerce.png";
import webIcon from "../../asset/images/web.png";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import Loading from "../Loading/Loading";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

class Services extends Component {
  constructor() {
    super();
    this.state = {
      serviceData: [],
      loadingAniamation: true,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.OurServices).then((result) => {
      this.setState({ serviceData: result, loadingAniamation: false });
    });
  }

  render() {
    if (this.state.loadingAniamation == true) {
      return <Loading />;
    } else {
      const list = this.state.serviceData;
      const serviceView = list.map((list) => {
        return (
          <Col lg={4} md={6} sm={12}>
            <Bounce top cascade>
              <div className="serviceCard text-center">
                <img className="designIcon" src={list.service_logo} alt="" />
                <h2 className="serviceH2">{list.service_name}</h2>
                <p className="serviceP">{list.service_description}</p>
              </div>
            </Bounce>
          </Col>
        );
      });
      return (
        <Fragment>
          <Container className="text-center">
            <Zoom top cascad>
              <h1 className="allServicesH1">All Services</h1>
            </Zoom>
            <div className="allServicesLine"></div>
            <Row>
              {serviceView}
              {/*Total row take 12 column*/}
              {/* <Col lg={4} md={6} sm={12}>
            
              <div className="serviceCard text-center">
                <img className="designIcon" src={designIcon} alt="" />
                <h2 className="serviceH2">Design</h2>
                <p className="serviceP">Design your website professionally</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="ecommerceIcon" src={ecommerceIcon} alt="" />
                <h2 className="serviceH2">Ecommerce</h2>
                <p className="serviceP">For developing ecommerce website</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard text-center">
                <img className="webIcon" src={webIcon} alt="" />
                <h2 className="serviceH2">Development</h2>
                <p className="serviceP">Make a well decorated website </p>
              </div>
            </Col> */}
            </Row>
          </Container>
        </Fragment>
      );
    } //end else
  }
}

export default Services;
