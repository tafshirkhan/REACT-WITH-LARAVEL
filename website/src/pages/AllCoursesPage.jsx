import React, { Component, Fragment } from "react";
import AllCourses from "../components/AllCourses/AllCourses";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class AllCoursesPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="All Courses" />
        <TopPage pagetitle="All Courses" />
        <AllCourses />
        <Footer />
      </Fragment>
    );
  }
}

export default AllCoursesPage;
