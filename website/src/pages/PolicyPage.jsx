import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PolicySection from "../components/PolicySection/PolicySection";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";
class PolicyPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Our Policy" />
        <TopPage pagetitle="Our Policy" />
        <PolicySection />
        <Footer />
      </Fragment>
    );
  }
}

export default PolicyPage;
