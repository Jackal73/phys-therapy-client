import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import "./ptamacs.css";
import { Col, Row } from "reactstrap";

export default function PtaMacs() {
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
              <Row className="row-2">
                <h1 className="text-2A">
                  What is the PTA MACS?
                  <p className="text-pA">
                    The Physical Therapist Assistant Manual for the Assessment of Clinical Skills (PTA MACS), 2nd
                    Edition describes the skills that a newly graduated physical therapist assistant must be able to
                    perform in order to engage in safe and effective practice. The skills in the PTA MACS are based on
                    (1) entry-level physical therapist assistant education criteria as defined by A Normative Model for
                    Physical Therapist Assistant Education, (2) standards of practice, elements of patient/client
                    management and terminology as defined by The Guide to Physical Therapist Assistant Practice 3.0, and
                    (3) standards of professional behavior initially defined as the Generic Abilities
                  </p>
                </h1>
              </Row>

              <Row className="row-2">
                <h1 className="text-2A">PTA MACS Instructions and Video Tutorial</h1>
                <p className="">
                  For a PDF instructions on the use of the PTA MACS click here:{" "}
                  <a href="#!" className="link">
                    PTA MACS Instructions
                  </a>
                </p>
                <p className="">
                  For a 6-minute video tutorial click here:{" "}
                  <a href="#!" className="link">
                    PTA MACS Video Instructions
                  </a>
                </p>
              </Row>

              <Row className="">
                <h1 className="text-2A">PTA MACS Ordering Instructions</h1>
                <p className="">
                  The PTA MACS are only in digital format delivered through EXXAT. Please contact
                  <a href="#!" className="link">
                    EXXAT
                  </a>{" "}
                  for info. Feel free to email a Consortium member if you want a user's perspective on its use.
                </p>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
