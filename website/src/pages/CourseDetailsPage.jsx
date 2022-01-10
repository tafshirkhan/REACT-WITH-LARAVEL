import React, { Component, Fragment } from "react";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";
import AppUrl from "../RESTAPI/AppUrl";
import RestURL from "../RESTAPI/RestURL";

class CourseDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      CourseDetailsID: match.params.courseID,
      CourseDetailsNAME: match.params.courseNAME,
      // CourseData: [],
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
    // RestURL.GETRequest(
    //   AppUrl.SingleCourseDetails + this.state.CourseDetailsID
    // ).then((result) => {
    //   this.setState({ CourseData: result });
    // });
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Course Details" />
        <TopPage pagetitle={this.state.CourseDetailsNAME} />
        {/* <CourseDetails courseDetailsData={this.state.CourseDeta} /> */}
        <CourseDetails id={this.state.CourseDetailsID} />
        <Footer />
      </Fragment>
    );
  }
}

export default CourseDetailsPage;
