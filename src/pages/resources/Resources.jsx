import React from "react";
import "./resources.css";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";
import hero2 from "../../assets/images/p-therapy-2.jpg";
import hero3 from "../../assets/images/p-therapy-3.jpg";

export default function Resources() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Leftbar />

        <div className="feed">
          <div className="feedWrapper">
            <Row>
              <Col className="hero-text">
                <h1 className="text">Texas Alliance of Physical Therapist Assistant Educators (TAPTAE)</h1>
              </Col>
            </Row>

            <div className="background-about">
              <Row>
                <Col className="hero-textA ">
                  <h1 className="text-2A-resource text-h3">
                    Resources for Site Coordinators of Clinical Education (SCCEs)
                    <ul className="mt-75-resource">
                      <li>
                        <a href="#!" className="link">
                          Weekly Summary Sheet
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="link">
                          Master Calendar
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="link">
                          Handbook (APTA Resource)
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="link">
                          American Council of Academic Physical Therapy (ACAPT) Resources
                        </a>
                      </li>
                    </ul>
                  </h1>
                  {/* <img className="-img" src={hero1} alt="" /> */}
                </Col>
              </Row>
              <hr className="hr" />

              <Row className="">
                <Col className="hero-textA">
                  <h1 className="text-2A-resource text-h3">
                    Resources for Clinical Instructors (CIs)
                    <ul className="mt-75-resource">
                      <li>
                        <a href="#!" className="link">
                          Weekly Summary Sheet
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="link">
                          PTA MACS Information
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="link">
                          CPI Web Main Page
                        </a>
                      </li>
                      <li>
                        <a href="#!" className="link">
                          American Council of Academic Physical Therapy (ACAPT) Resources
                        </a>
                      </li>
                    </ul>
                  </h1>
                </Col>
              </Row>
              <hr className="hr" />
              <Row className="row-center-img-resource">
                {/* <Col> */}
                <img className="img-resource" src={hero1} alt="" />
                <img className="img-resource" src={hero2} alt="" />
                <img className="img-resource" src={hero3} alt="" />
                {/* </Col> */}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
