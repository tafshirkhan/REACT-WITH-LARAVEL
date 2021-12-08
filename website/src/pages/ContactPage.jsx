import React, { Component, Fragment } from "react";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class ContactPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Contact Us" />
        <TopPage pagetitle="Contact Us" />
        <ContactUs />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;
