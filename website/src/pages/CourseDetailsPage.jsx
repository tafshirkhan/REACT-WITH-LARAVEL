import React, { Component, Fragment } from "react";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class CourseDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Course Details" />
        <TopPage pagetitle="Course Details" />
        <CourseDetails />
        <Footer />
      </Fragment>
    );
  }
}

export default CourseDetailsPage;
