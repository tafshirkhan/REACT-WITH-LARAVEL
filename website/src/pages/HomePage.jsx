import React, { Component, Fragment } from "react";
import Services from "../components/Services/Services";
import TopBanner from "../components/TopBanner/TopBanner";
import TopNavbar from "../components/TopNavbar/TopNavbar";
import AnalysisChart from "../components/AnalysisChart/AnalysisChart";
import Summary from "../components/Summary/Summary";
import RecentWork from "../components/RecentWorks/RecentWork";
import OurCourses from "../components/OurCourses/OurCourses";
import Video from "../components/Videos/Video";
import ClientReview from "../components/ClientReviews/ClientReview";
import Aboutme from "../components/AboutMe/Aboutme";
import Footer from "../components/Footer/Footer";
import WelcomeHome from "../components/WelcomeHome/WelcomeHome";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <TopNavbar title="React Project" />
        <TopBanner />
        <WelcomeHome />
        <Services />
        <AnalysisChart />
        <Summary />
        <RecentWork />
        <OurCourses />
        <Video />
        <ClientReview />
        <Aboutme />
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
