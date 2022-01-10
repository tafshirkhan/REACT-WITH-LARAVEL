import React, { Component, Fragment } from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";
import URL404 from "../components/URL404/URL404";

class PageError404 extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <TopNavbar title="404 ERROR" />
          <TopPage pagetitle="Page Not Found" />
          <URL404 />
          <Footer />
        </Container>
      </Fragment>
    );
  }
}

export default PageError404;
