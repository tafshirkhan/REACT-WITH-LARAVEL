import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import OurGoalSection from "../components/OurGoalSection/OurGoalSection";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class OurGoalPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Our Goal" />
        <TopPage pagetitle="Our Goal" />
        <OurGoalSection />
        <Footer />
      </Fragment>
    );
  }
}

export default OurGoalPage;
