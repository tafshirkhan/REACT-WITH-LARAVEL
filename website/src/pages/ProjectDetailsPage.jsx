import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import ProjectDetails from "../components/ProjectDetails/ProjectDetails";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import TopPage from "../components/TopPage/TopPage";

class ProjectDetailsPage extends Component {
  constructor({ match }) {
    super();
    this.state = {
      ProjectDetailsID: match.params.projectID,
      ProjectDetailsNAME: match.params.projectNAME,
    };
  }

  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="Project Details" />
        <TopPage pagetitle={this.state.ProjectDetailsNAME} />
        <ProjectDetails id={this.state.ProjectDetailsID} />
        <Footer />
      </Fragment>
    );
  }
}

export default ProjectDetailsPage;
