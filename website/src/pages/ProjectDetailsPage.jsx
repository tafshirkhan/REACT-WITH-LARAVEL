import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class ProjectDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Project Details" />
        <TopPage pagetitle="Project Details" />
        <ProjectDetails />
        <Footer />
      </Fragment>
    );
  }
}

export default ProjectDetailsPage;
