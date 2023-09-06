import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import "./aboutUs.css";
import { Col, Row } from "reactstrap";
import hero1 from "../../assets/images/p-therapy.jpg";
import heroPic from "../../assets/images/about-banner.webp";

export default function AboutUs() {
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

            <Row>
              <Col>
                <img className="heroAbt" src={heroPic} alt="" />
              </Col>
            </Row>

            <div className="background-about">
              <Row>
                <Col className="hero-textA ">
                  <h1 className="text-2A">
                    Enhancing Academic and Clinical Partnership in PTA Education
                    <p className="text-pA">
                      The primary purpose of this group is to coordinate all aspects of physical therapy clinical
                      education. The Consortium functions with the financial support from the participating
                      Universities. The Consortium has reduced the time, effort and cost of maintaining quality clinical
                      education for the state's physical therapy students. In addition, The Consortium provides
                      continuing education opportunities and training workshops for Clinical Instructors as well as
                      Academic Coordinators of Clinical Education from all parts of the nation.
                    </p>
                  </h1>
                  <img className="-img" src={hero1} alt="" />
                </Col>
              </Row>
              <hr className="hr" />

              <Row className="row-2">
                <h1 className="text-2A">Focus</h1>
                <p className="">
                  Here, you will find a central source of information about the many Physical Therapy programs in Texas,
                  especially with respect to clinical education. It includes a list of members and access to the Texas
                  Consortium Clinical Education Certification Course. This course has two parts: Part I: online and
                  accessible through this website; Part II: a face-face class to be done after Part I is completed
                  online.
                </p>
              </Row>

              <hr className="hr" />

              <Row className="row-2">
                <h1 className="text-2A">Incorporation</h1>
                <p className="">
                  The Texas Alliance of Physical Therapist Assistant Educators (TAPTAE) is the result of a collaborative
                  arrangement among the physical therapy programs in the state.
                </p>
              </Row>

              <hr className="hr" />

              <Row className="row-2">
                <h1 className="text-2A">Members</h1>
                <a href="#!" className="linkAb">
                  Click here for Consortium member and contact information.
                </a>
              </Row>
            </div>

            <hr className="hrEnd" />
          </div>
        </div>
      </div>
    </>
  );
}
