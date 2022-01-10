import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import URL404 from "../components/URL404/URL404";
import AboutPage from "../pages/AboutPage";
import AllCoursesPage from "../pages/AllCoursesPage";
import AllPortfolio from "../pages/AllPortfolio";
import ContactPage from "../pages/ContactPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import HomePage from "../pages/HomePage";
import OurGoalPage from "../pages/OurGoalPage";
import PageError404 from "../pages/PageError404";
import PolicyPage from "../pages/PolicyPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import ServicePage from "../pages/ServicePage";
import TermConditionPage from "../pages/TermConditionPage";
class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={ServicePage} />
          <Route exact path="/allcourse" component={AllCoursesPage} />
          <Route exact path="/allportfolio" component={AllPortfolio} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/policy" component={PolicyPage} />
          <Route exact path="/termandcondition" component={TermConditionPage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/ourgoal" component={OurGoalPage} />
          <Route
            exact
            path="/projectdetails/:projectID/:projectNAME"
            component={ProjectDetailsPage}
          />
          <Route
            exact
            path="/coursedetails/:courseID/:courseNAME"
            component={CourseDetailsPage}
          />

          <Route component={PageError404} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRouter;
