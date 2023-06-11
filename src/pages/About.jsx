import React from "react";
import Title from "../components/Title/Title";
import CommonSection from "../components/UI/CommonSection";
import AboutSection from "../components/UI/AboutSection";
import { Col, Container, Row } from "reactstrap";
import dirverImg from "../assets/all-images/drive.jpg";
import BecomesDriver from "../components/UI/BecomeDriver";
import OurMembers from "../components/UI/OurMembers";
import '../styles/about.css';
const About = () => {
  return (
    <Title title="about">
      <CommonSection title={"About Us"} />
      <AboutSection  aboutClass="aboutPage" />

      <section className="about_page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about-page-img">
                <img src={dirverImg} className="w-100 rounded-3" alt="" />
              </div>
            </Col>
            <Col lg="6" md="6" sm="12">
              <div className="about_page-content">
                <h2 className="section_title">
                  We Are Commited To Provide Safe Ride Solutions
                </h2>
                <p className="section_description text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Del
                  eos ipsum. Minus debitis facere blanditiis magnam nostrum
                  mollitia hic eius error, recusandae provident dolorem!
                </p>
                <p className="section_description text-dark">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delecos ipsum. Minus debitis facere blanditiis magnam nostrum
                  mollitia hic eius error, recusandae provident dolorem!
                </p>
                <div className="d-flex align-items-center gap-3">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <div className="">
                    <h6 className="section_subtitle ">Need Any Help?</h6>
                    <h4 className="">+12345643</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BecomesDriver />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section_subtitle">Experts</h6>
              <h5 className="section_title ">Our Members</h5>
            </Col>
            <OurMembers  />
          </Row>
        </Container>
      </section>
    </Title>
  );
};

export default About;
