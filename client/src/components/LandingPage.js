import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchMovies from "./Search";
// react plugin used to create charts
//import { Line } from "react-chartjs-2";
// reactstrap components
import {
  //Button,
  //Card,
  //CardHeader,
  //CardBody,
  //CardFooter,
  //CardTitle,
  //ListGroupItem,
  //ListGroup,
  //Container,
  Row,
  Col,
} from "reactstrap";

// core components
import IndexNavbar from "../components/Navbars/IndexNavbar";
import Footer from "../components/Footer/Footer";

//import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={require("../assets/img/blob.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("../assets/img/path2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("../assets/img/triunghiuri.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("../assets/img/waves.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("../assets/img/patrat.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("../assets/img/cercuri.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Search for Quality <br />
                  <span className="text-white">Content</span>
                </h1>
                <p className="text-white mb-3">
                  With over 10,000 vetted educational videos, you can leverage
                  the power of video and kinesthetics to engage today's
                  learners.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Search with a keyword or phrase
                  </p>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <SearchMovies />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
