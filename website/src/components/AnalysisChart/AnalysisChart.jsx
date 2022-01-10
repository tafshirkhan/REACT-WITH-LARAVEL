import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../asset/CSS/custom.css";
import "../../asset/CSS/bootstrap.min.css";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import RestURL from "../../RESTAPI/RestURL";
import AppUrl from "../../RESTAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import Bounce from "react-reveal/Bounce";

class AnalysisChart extends Component {
  constructor() {
    super();
    this.state = {
      chartData: [],
      analysisDes: "",
      loadingAniamation: true,
    };
  }

  componentDidMount() {
    RestURL.GETRequest(AppUrl.ChartData).then((result) => {
      this.setState({ chartData: result, loadingAniamation: false });
    });
    RestURL.GETRequest(AppUrl.HomePageAnalysis).then((result) => {
      this.setState({ analysisDes: result[0]["analysis_description"] });
    });
  }

  render() {
    if (this.state.loadingAniamation == true) {
      return <Loading />;
    } else {
      var blue = "rgb(3, 3, 85)";
      return (
        <Fragment>
          <Container className="text-center">
            <h1 className="allServicesH1">Analysis</h1>
            <div className="allServicesLine"></div>
            <Bounce top cascade>
              <Row>
                <Col
                  style={{ widows: "100%", height: "300px" }}
                  lg={6}
                  md={12}
                  sm={12}
                >
                  <ResponsiveContainer>
                    <BarChart
                      width={100}
                      height={300}
                      data={this.state.chartData}
                    >
                      <XAxis dataKey="Technology" />
                      <Tooltip />
                      <Bar dataKey="Projects" fill={blue}></Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </Col>

                <Col lg={6} md={12} sm={12}>
                  <p className="analysisP, serviceP">
                    {ReactHtmlParser(this.state.analysisDes)}
                  </p>
                </Col>
              </Row>
            </Bounce>
          </Container>
        </Fragment>
      );
    } //end else
  }
}

export default AnalysisChart;
