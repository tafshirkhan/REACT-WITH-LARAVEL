import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../asset/CSS/custom.css";
import "../../asset/CSS/bootstrap.min.css";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

class AnalysisChart extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { Technology: "PHP", Projects: 100 },
        { Technology: ".NET", Projects: 95 },
        { Technology: "REACT", Projects: 90 },
        { Technology: "C#", Projects: 85 },

        { Technology: "PYTHON", Projects: 75 },
        { Technology: "MYSQL", Projects: 70 },
        { Technology: "JAVA", Projects: 65 },
      ],
    };
  }
  render() {
    var blue = "rgb(3, 3, 85)";
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="allServicesH1">Analysis</h1>
          <div className="allServicesLine"></div>
          <Row>
            <Col
              style={{ widows: "100%", height: "300px" }}
              lg={6}
              md={12}
              sm={12}
            >
              <ResponsiveContainer>
                <BarChart width={100} height={300} data={this.state.data}>
                  <XAxis dataKey="Technology" />
                  <Tooltip />
                  <Bar dataKey="Projects" fill={blue}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <p className="analysisP, serviceP">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                porttitor, metus vel consequat blandit, quam mi dignissim nisl,
                vitae euismod velit est nec ligula.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                porttitor, metus vel consequat blandit, quam mi dignissim nisl,
                vitae euismod velit est nec ligula.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AnalysisChart;
