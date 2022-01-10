import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";

class ClientReview extends Component {
  constructor() {
    super();
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.ClientReview).then((result) => {
      this.setState({ reviews: result });
    });
  }

  render() {
    var settings = {
      autoPlaySpeed: 3000,
      autoPlay: true,
      dots: true,
      infinite: true,
      speed: 3000,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    const list = this.state.reviews;
    const clientReview = list.map((list) => {
      return (
        <div>
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img className="reviewImage" src={list.client_image} />
              <h2 className="reviewH2">{list.client_title}</h2>
              <p className="reviewP">{list.client_description} </p>
            </Col>
          </Row>
        </div>
      );
    });
    return (
      <Fragment>
        <Container fluid={true} className="sliderBack text-center">
          <h1 className="reviewTitle p-3">Reviews</h1>
          <div className="reviewTitleBottom"></div>
          <Slider {...settings}>
            {clientReview}
            {/* <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="reviewImage"
                    src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"
                  />
                  <h2 className="reviewH2">Tafshir</h2>
                  <p className="reviewP">Make a well decorated website </p>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="reviewImage"
                    src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg&ga=GA1.2.1577707044.1637647301"
                  />
                  <h2 className="reviewH2">Ahmed</h2>
                  <p className="reviewP">Make a well decorated website </p>
                </Col>
              </Row>
            </div>

            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="reviewImage"
                    src="https://image.freepik.com/free-photo/silly-african-american-guy-making-grimace-showing-tongue-sulking-offended-by-someone-standing-disappointed-grumpy-white_176420-39739.jpg"
                  />
                  <h2 className="reviewH2">Khan</h2>
                  <p className="reviewP">Make a well decorated website </p>
                </Col>
              </Row>
            </div> */}
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
