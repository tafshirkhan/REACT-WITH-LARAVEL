import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PrivacySection from "../components/PrivacySection/PrivacySection";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class PrivacyPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Privacy" />
        <TopPage pagetitle="Privacy" />
        <PrivacySection />
        <Footer />
      </Fragment>
    );
  }
}

export default PrivacyPage;
