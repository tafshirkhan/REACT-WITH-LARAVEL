import React, { Component, Fragment } from "react";
import AboutDetails from "../components/AboutDetails/AboutDetails";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="About Us" />
        <TopPage pagetitle="About Us" />
        <AboutDetails />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
