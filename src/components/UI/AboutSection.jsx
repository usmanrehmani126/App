import React from "react";
import { Col, Container, Row } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import "../../styles/About-section.css";
const AboutSection = ({aboutClass}) => {
  return (
    <section className="about_section"   style={aboutClass
     === 'aboutClass' ? {marginTop:"0px"} : {marginTop:"10px"}}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about-section-content">
              <h4 className="section_subtitle about_us">About Us</h4>
              <h2 className="section_title ">welcome to car rent service</h2>
              <p className="section_description text-dark">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                dolorem quo sapiente libero, blanditiis veniam vel ea nihil.
                Inventore accusantium pariatur officia ut quas ipsa quibusdam ex
                sapiente repudiandae est.
              </p>
              <div className="about_section-item d-flex align-items-center">
                <p className="section-description d-flex gap-2 align-items-center">
                  <i class="ri-checkbox-circle-line "></i>Lorem ipsum dolor sit
                  amet.
                </p>
                <p className="section-description d-flex gap-2 align-items-center">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
              <div className="about_section-item d-flex align-items-center">
                <p className="section-description d-flex gap-2 align-items-center">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
                <p className="section-description d-flex gap-2 align-items-center">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} className="w-100" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
