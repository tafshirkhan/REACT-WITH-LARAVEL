import React, { Component, Fragment } from "react";
import AllWorks from "../components/AllWorks/AllWorks";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class AllPortfolio extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Portfolio" />
        <TopPage pagetitle="All Portfolio" />
        <AllWorks />
        <Footer />
      </Fragment>
    );
  }
}

export default AllPortfolio;
