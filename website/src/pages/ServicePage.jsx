import React, { Component, Fragment } from "react";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Services from "../components/Services/Services";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class ServicePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Our Services " />
        <TopPage pagetitle="Our Services" />
        <Services />
        <ContactUs />
        <Footer />
      </Fragment>
    );
  }
}

export default ServicePage;
