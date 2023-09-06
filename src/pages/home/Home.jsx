import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import "./home.css";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/hero1.avif";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />

        <div className="feed container">
          <div className="feedWrapper">
            <Row>
              <Col className="hero-text">
                <h1 className="text">Texas Alliance of Physical Therapist Assistant Educators (TAPTAE)</h1>
              </Col>
            </Row>
            <Row className="row-2">
              <Col className="hero-text">
                <h1 className="text-2">
                  <i>
                    Enhancing Academic and Clinical Partnership
                    <br /> in PTA Education
                  </i>
                </h1>
              </Col>
            </Row>
            <Row>
              <Col className="hero-text">
                <p className="text-p p-3">
                  Welcome to the Texas Consortium for Physical Therapy Clinical Education website. Our primary purpose
                  is to promote excellence in Physical Therapy Clinical Education.
                  <br />{" "}
                  <a href="#!" className="link-1">
                    Click here for more information
                  </a>
                </p>
              </Col>
            </Row>

            <Col lg="4" className="hero-text img-box">
              <img className="-img1" src={hero1} alt="" />
              <h3 className="text-h3">
                <span className="h3-text">PTA MACS and CPI Information</span>
                <br />
                <div className="ptmacLink">
                  <a href="#!" className="link">
                    PTA MACS - Information
                  </a>
                </div>
                <br />
                <div className="cpiLink">
                  <a href="#!" className="link">
                    CPI Web Main Page
                  </a>
                </div>
              </h3>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}
