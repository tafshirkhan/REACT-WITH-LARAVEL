import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import TermAndCondition from "../components/TermAndCondition/TermAndCondition";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class TermConditionPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Term and Condition" />
        <TopPage pagetitle="Term and Condition" />
        <TermAndCondition />
        <Footer />
      </Fragment>
    );
  }
}

export default TermConditionPage;
