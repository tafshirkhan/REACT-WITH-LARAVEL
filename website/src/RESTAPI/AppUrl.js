class AppUrl {
  static BaseURL = "http://127.0.0.1:8000/api";
  //Home Extra
  static HomePageTitle = this.BaseURL + "/homepage/title";
  static HomePageAnalysis = this.BaseURL + "/homepage/analysis";
  static HomePageTotals = this.BaseURL + "/homepage/totals";
  static HomePageVideo = this.BaseURL + "/homepage/video";

  //Recent Works
  static RecentWorks = this.BaseURL + "/recentworks";
  static RecentAllWorks = this.BaseURL + "/recentallworks";
  static SingleWokrsDetails = this.BaseURL + "/singleworkdetails/";
  //Our services
  static OurServices = this.BaseURL + "/ourservices";
  static Information = this.BaseURL + "/information";
  static FooterData = this.BaseURL + "/footerdata";

  //Our Courses
  static OurCourses = this.BaseURL + "/ourcourses";
  static OurAllCourses = this.BaseURL + "/ourallcourses";
  static SingleCourseDetails = this.BaseURL + "/singlecoursedetails/";

  static PostContact = this.BaseURL + "/postcontact";
  static ClientReview = this.BaseURL + "/clientreview";
  static ChartData = this.BaseURL + "/chartdata";
}

export default AppUrl;
